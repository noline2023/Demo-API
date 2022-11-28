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
                return console.error(err)
            }
            else{
                console.log("Inserted To DB succesfuly!")
            }
        })
        return newItem
    }

    return {getAll,getByID,addAll,add}
}

module.exports = dbServices