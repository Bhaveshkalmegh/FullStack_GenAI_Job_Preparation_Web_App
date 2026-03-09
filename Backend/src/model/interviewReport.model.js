const mongoose = require("mongoose")

/**
 * self description : String
 * resume description : String
 * job desccription : String
 * match score : Number(0,100)
 * 
 * technical question : [{
 *      question: String,
 *      intention:String,
 *      answer: String
 * },{},...]
 * behaviourial question =[{
 *      question:String,
 *      intention:String,
 *      answer:String
 * 
 * },{},...]
 * skill gap:[{
 *      skill:"",
 *      severity:{
 *          type:String,
 *          enum: ["low","medium","high"]
 *          }
 * },{},...]
 * preparation plan:[{
 *       day: Number,
 *       focus:String,
 *       tasks:[String]
 * },{},...]
*/


const technicalQuestionSchema=new mongoose.Schema({

        question:{
            type:String,
            required:[true,"Question is  required"]
        },
        intention:{
            type:String,
            required : [true,"Intention is  required"]
        },
        answer:{
            type:String,
            required:[true,"Answer is  required"]
        }
    
},{
    _id:false, 
})

const behavioralQuestionSchema = new mongoose.Schema({
  
         question:{
            type:String,
            required:[true,"Question is  required"]
        },
        intention:{
            type:String,
            required : [true,"Intention is  required"]
        },
        answer:{
            type:String,
            required:[true,"Answer is  required"]
        }
},{
    _id:false, 
})


const skillGapsSchema= new mongoose.Schema({
    skill:{
        type:String,
        required:[true,"skill is required"]
    },
    severity: {
        type: String,
        enum: ["low", "medium", "high"],
        required: true
    }

},{

    _id:false
})

const preparationPlan= new mongoose.Schema({
  day:{
    type:Number,
    required:[true,"day is required"]
  },
  focus:{
    type:String,
    required:[true,"focus is required"]
  },
  plan:[{
    type:String,
    required:[true,"Task is required"]
  }
  ]
})


const interviewReportSchema = new mongoose.Schema({
    selfDescription:{
        type:String,
        required:true
    },
    resume:{
        type:String,
    },      
    jobDescription:{
        type:String,
        required:true
    },
    matchScore:{
        type: Number,
        min:0,
        max:100,
    },

    technicalQuestion:[technicalQuestionSchema],
    behaviouralQuestion:[behavioralQuestionSchema],
    skillGaps:[skillGapsSchema],
    preparationPlan:[preparationPlan]
},{
    timestamps:true
})


const interviewReportModel = mongoose.model("InterviewReport",interviewReportSchema)