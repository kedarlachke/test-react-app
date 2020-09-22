import moxios, { requests } from 'moxios'
import {testStore} from '../../utils'
import {fetchPost} from '../actions'

describe("fetchPost action",()=>{
    beforeEach(()=>{
        moxios.install();
    })

    afterEach(()=>{
        moxios.uninstall();
    })

    it("Store is updated correctly",()=>{
        const expectedState=[{
            title:"Test Tilte 1",
            desc:"Test Desc"
        },{
            title:"Test Tilte 2",
            desc:"Test Desc"
        },{
            title:"Test Tilte 3",
            desc:"Test Desc"
        }]

        const store=testStore();
        moxios.wait(()=>{
            const request=moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response:expectedState
            })
        });

        return store.dispatch(fetchPost()).then(()=>{
            const newState=store.getState()
            expect(newState.postreducer).toBe(expectedState)

        })
    })
})