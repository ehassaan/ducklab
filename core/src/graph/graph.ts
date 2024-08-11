

export class Graph<N, L> {

    links: {
        src: string,
        dst: string,
        data?: L,
    }[] = [];

    nodes: {
        [key: string]: N;
    } = {};
    
    rootNode: string | null = null;

    setRoot(nodeId: string) {
        this.rootNode = nodeId;
    }

    addNode(id: string, data: N) {
        if (id in this.nodes) {
            throw new Error(`Node with id '${id}' exists already`);
        }
        this.nodes[id] = data;
        return this;
    }

    addLink(from: string, to: string, data?: L) {
        for (const lnk of this.links) {
            if (lnk.src === from && to === lnk.dst) {
                throw new Error(`The link '${from}' -> '${to}' already exists`);
            }
        }
        this.links.push({
            src: from,
            dst: to,
            data
        });
        return this;
    }

    getLinksFrom(nodeId: string) {
        const links = this.links.filter((lnk) => lnk.src === nodeId);
        return links;
    }

    getLinksTo(nodeId: string) {
        const links = this.links.filter((lnk) => lnk.dst === nodeId);
        return links;
    }

    getRoot() {
        if (!this.rootNode) return null;
        return this.nodes[this.rootNode];
    }

    getNode(nodeId: string) {
        if (nodeId in this.nodes) return this.nodes[nodeId];
        throw new Error(`Node with id '${nodeId}' does not exist`);
    }

    *[Symbol.iterator]() {
        if (!this.rootNode) throw new Error("Root node must be set");
        yield* this.getNested(this.rootNode);
    }

    private * getNested(nodeId: string): Generator<GraphLink<N, L>> {
        for (const lnk of this.getLinksFrom(nodeId)) {
            yield {
                src: {
                    id: lnk.src,
                    data: this.getNode(lnk.src)
                },
                dst: {
                    id: lnk.dst,
                    data: this.getNode(lnk.dst)
                },
                data: lnk.data as any
            };
            yield* this.getNested(lnk.src);
        }
    }

}

export interface GraphLink<N, L> {
    src: null | {
        id: string,
        data: N
    };
    dst: {
        id: string,
        data: N
    }
    data: L
}

