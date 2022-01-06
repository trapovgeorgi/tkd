import React from 'react'
import Button from '../../components/Button'
import Center from '../../components/Center'
import Form from '../../components/Form'
import Input from '../../components/Input'

export default function LoginPage() {
    return (
        <Center>
           <Form>
               <Input type="text" text="Име"/>
               <Input type="password" text="Парола"/>
               <Button text="Влизане"/>
           </Form>
        </Center>
    )
}
