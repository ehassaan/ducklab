

export interface IFieldInfo {
    name: string;
    type: 'number' | 'string' | 'boolean' | 'datetime';
    default?: any;
    maxSize?: number;
}
