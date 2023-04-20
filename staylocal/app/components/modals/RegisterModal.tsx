'use client'
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import { useCallback,useState } from 'react'
import {
     FieldValues,
     SubmitHandler,
     useForm
} from 'react-hook-form'

import useRegisterModal from '@/app/hooks/useRegisterModal'
import Modal from './Modal'

const RegisterModal = () => {

  const registerModal = useRegisterModal()
  const [isLoading,setIsloading] = useState(false)

  const{
     register, 
     handleSubmit,
     formState:{
         errors,
     }
  } = useForm<FieldValues>({
      defaultValues:{
         name:"",
         email:"",
         password:""
      }
  })

  const onSubmit:SubmitHandler<FieldValues> = (data)=>{
      setIsloading(true)
      axios.post(`/api/register`,data)
       .then(()=>{
         registerModal.onClose()
       })
       .catch(err=>{
         console.log(err)
       })
       .finally(()=>{
         setIsloading(false)
       })
  }


  const bodyContent = ( 
      <div className='flex flex-col gap-4'>
         sup bitches
      </div>
  )



  return (
     <Modal
       disabled={isLoading}
       isOpen={registerModal.isOpen}
       title="Register"
       actionLabel='Continue'
       onClose={registerModal.onClose}
       onSubmit={handleSubmit(onSubmit)}
       body={bodyContent}/>
  )
}

export default RegisterModal
