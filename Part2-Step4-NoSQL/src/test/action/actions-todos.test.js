import { setTodos, pushTodos, deleteTodo, editTodo, editStatus } from '../../redux/actions/actions-todos'


describe('Todos Action', () => {

    it('Set Defaul Todos in Redux', () => {

        const result = setTodos([]);

        expect(result).toEqual({

            type: 'SET_TODOS_PAYLOAD',

            payload: { todos: [] }

        })
    });




    it('Add  new Todo in Redux', () => {

        const result = pushTodos({

            _id: "1",
            titile: 'Front End',
            description: ' i will complete Front Today',
            status: 'pending'

        });

        expect(result).toEqual({

            type: 'PUSH_TODO',

            payload: {
                todo: {
                    _id: "1",
                    titile: 'Front End',
                    description: ' i will complete Front Today',
                    status: 'pending'
                }
            }

        });
    });


    it('Delete One Todo From Redux', () => {
        const result = deleteTodo("1");

        expect(result).toEqual({

            type: 'DELETE_TODO',
            payload: { id: '1' }

        })
    });


    it('Edit Todo Status in Redux', () => {
        const result = editStatus("1")
        expect(result).toEqual({

            type: 'EDIT_STATUS',
            payload: { _id: "1" }

        })
    })


})