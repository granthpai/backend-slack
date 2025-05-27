export default function crudRepository(model){
    return {
        create: async function(data){
            const newDoc = await model.create(data);
            return newDoc;
        },
        getAll: async function () {
            const allDocs = await model.find();
            return allDocs;
          },
          getById: async function (id:string) {
            const doc = await model.findById(id);
            return doc;
          },
          delete: async function (id:string) {
            const response = await model.findByIdAndDelete(id);
            return response;
          },
          update: async function (id:string, data:any) {
            const updatedDoc = await model.findByIdAndUpdate(id, data, {
              new: true
            });
            return updatedDoc;
          },
          deleteMany: async function(modelIds:string[]){
            const response = await model.deleteMany({
                _id:{
                    $in:modelIds
                }
            });
            return response;
          }
    }
}