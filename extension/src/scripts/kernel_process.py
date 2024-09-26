import avro.schema
from ipykernel import kernelapp as app


class KernelServer:
    def __init__(self):
        self.kernel = app.IPKernelApp.instance()
        self.kernel.initialize()
        self.kernel.start()

    def execute(self, code):
        return self.kernel.execute(code)


def run_server():
    server = KernelServer()


from avro.io import DatumReader, DatumWriter

schema = avro.schema.parse({
    {"namespace": "example.avro",
 "type": "record",
 "name": "User",
 "fields": [
     {"name": "name", "type": "string"},
     {"name": "favorite_number",  "type": ["int", "null"]},
     {"name": "favorite_color", "type": ["string", "null"]}
 ]
}
})
schema.

if __name__ == "__main__":
    run_server()
