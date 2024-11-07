"use client"
import React, { useState } from 'react'
import { Button } from '../../../components/ui/button'
import { Input } from '../../../@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../@/components/ui/dialog"

function AddNewInterview() {
  const [openDialoug, setOpenDialoug] = useState(false)
  const [jobPosition, setJobPosition]= useState()
  const [jobDesc, setJobDesc] = useState()
  const [jobExp, setJobExp] = useState()

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(jobPosition, jobDesc, jobExp)
  }

  return (
    <div>
      <div className="p-10 border rounded-lg bg-gray-100 shadow-md transition-all cursor-pointer hover:bg-gray-200" onClick={() => setOpenDialoug(true)}>
        <h2 className="font-bold text-lg text-center">+ Add new</h2>
      </div>
      
      <Dialog open={openDialoug} onOpenChange={() => setOpenDialoug(false)}>
        <DialogContent className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl p-8 transform transition-transform duration-300">
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold text-center text-gray-800 mb-4">
                Tell us more about your next job interview
              </DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-gray-600 text-center mb-6">
              <h2>Add details about your job position/role, job description, and your years of experience</h2>
            </DialogDescription>

            <div className="space-y-4">
              <form onSubmit={onSubmit}>
              <div>
                <label className="block font-semibold mb-2 text-gray-700">Job Role/Position</label>
                <Input placeholder="Ex. Frontend Developer" className="w-full border-gray-300 rounded-md" required onChange={(e) => setJobPosition(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-gray-700">Job Description/Tech stack</label>
                <Input placeholder="Ex. React.js" className="w-full border-gray-300 rounded-md" required onChange={(e) => setJobDesc(e.target.value)}/>
              </div>
              <div>
                <label className="block font-semibold mb-2 text-gray-700">Years of Experience</label>
                <Input placeholder="Ex. 2 Years" className="w-full border-gray-300 rounded-md" required onChange={(e) => setJobExp(e.target.value)}/>
              </div>
              </form>
            </div>

            <div className="flex gap-4 justify-end mt-8">
              <Button
                className="bg-gray-300 text-gray-800 hover:bg-gray-400 transition-colors"
                variant="ghost"
                onClick={() => setOpenDialoug(false)}
              >
                Cancel
              </Button>
              <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors" onClick={onSubmit}>
                Start
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddNewInterview
