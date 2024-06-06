import mongoose, {Schema} from "mongoose";

const EtapaSchema = Schema({
    nombre:{
        type: String,
        required: true        
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

export default mongoose.model ("Etapa", EtapaSchema)