import mongoose, {Schema} from "mongoose";

const ClienteSchema = Schema({
    nombre:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    fechaCreacion: {
        type: Date,
        required: true
    },
    fechaActualizacion: {
        type: Date,
        required: true
    }    

})

export default mongoose.model("Cliente", ClienteSchema)