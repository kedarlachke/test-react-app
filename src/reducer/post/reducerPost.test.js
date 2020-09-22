import {types} from './../../actions/types'
import postreducer from './reducer'


describe("Post reducer",()=>{

    it('should return default state',()=>{
             const newState=postreducer(undefined, {})
            expect(newState).toEqual([])
        });
    
     it('should return a new state if receiving types',()=>{
         const posts=[{title:"test 1"},{title:"test 2"},{title:"test 3"},{title:"test 4"}]

         const newSate=postreducer(undefined,{
             type:types.GET_POST,
             payload:posts
            })

        expect(newSate).toEqual(posts)
     })   
})