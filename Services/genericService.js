const dbServices = (model)=>{

    /**
     * returns all the data in the model
     * @returns {Promise<*>}
     */

    const getAll = async ()=>{
        return await model.find()
    }

    /**
     * 
     * @param {ObjectId} id 
     * @returns {Object} Object
     */
    const getByID = async (id)=>{
        return await model.findById(id);
    }

    /**
     * creates a new document in the collection
     * @param {Object} object
     * @returns {Promise<*>}
     */
    const add = async(object)=>{
        const newObject = new model(object)
        return await newObject.save();

    }

    /**
     * 
     * @param {List<Objects>} Object 
     * @returns {Promise<*>} Promise
     */
    const addAll = async (objectsArray) => {

        const newItem = model.collection.insertMany(objectsArray,(err,document)=>{
            if(err){
                console.log(err)
                return err
            }
            else{
                console.log("Inserted To DB succesfuly!")
            }
        })
        return newItem

    }

    /**
   * updates a document in the collection
   * @param {ObjectId} id
   * @param {Object} object
   * @returns
   */
    const update = async (id,object) =>{
        return await model.findByIdAndUpdate({_id:id},object,{new:true})
    }

    /**
   * deletes a document in the collection
   * @param {ObjectId} id
   * @returns
   */
  const remove = async (id) => {
    return await model.findByIdAndRemove({_id: id});
  };

    return {getAll,getByID,addAll,add,update,remove}
}

module.exports = dbServices