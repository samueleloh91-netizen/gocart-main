import { Inngest } from './client'
import prisma from '@/lib/prisma'


//Inngest Fuctions to save user data to a database
export const syncUserCreations=inngest.creatFuctions(
    {id:'sync-user-create'},
    {event: 'clerk/user.created '},
    async({ event })=>{
        const {data}=event
        await prisma.user.create({
            data:{
                id:data.id,
                email: data.email_addresses[0].email_addresses,
                name: `${data.first_name} ${data.last_name}`,
                image:data.image_url,






            }



        })


    }

    




    )


    //inngest fuctions to update user data in database
    export const syncUserUpdation=inngest.creatFuctions(
        {id: 'sync-user-update'},
        {events:'clerk/user.updated'},
        async ({events})=>{
            const {data}=events
            await prisma.user.update({
                where:{id:data.id,},
                data:{
                     email: data.email_addresses[0].email_addresses,
                name: `${data.first_name} ${data.last_name}`,
                image:data.image_url,



                }
                
                



            })

        }







    )

    //inngest fuction to delete user from database
    export const syncUserDeletion=inngest.creatFuctions(
          {id: 'sync-user-delete'},
        {events:'clerk/user.deleted'},
        async ({events})=>{
            const {data}=events
            await prisma.user.update({
                where:{id: data.id,}
              



                })
                
                



            })

        

