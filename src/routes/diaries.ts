import * as diaryServices from '../services/diaryServices'
import express from 'express'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/',(req,res)=>{
    res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id',(req,res)=>{
    const diary = diaryServices.findById(+req.params.id)
    return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/',(req,res)=>{
    try{
        const newDiaryEntry = toNewDiaryEntry(req.body)

        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
        res.json(addedDiaryEntry)
    }catch(error:any){
        res.status(400).send(error.message)
    }
})

export default router