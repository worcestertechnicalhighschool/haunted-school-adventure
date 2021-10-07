import { getDefaultNormalizer } from '@testing-library/react'
import react from 'react'

export default class StatAllocator extends react.Component {
    constructor({onStatAllocation})
    {
        this.state = {
            stats: {
                atk: 0,
                mag: 0,
                def: 0,
                stl: 0,
            },
            maxPoints: 0,
        }
    }
    render() {
        return (
            <div className="">

            </div>
        )
    }
}

function StatPoints({name, count, statAcc, statDec}) {
    return (
        <div>
            <span>{name}</span>
            <span>{count}</span>
            <input type="button" onClick={statAcc} />
            <input type="button" onClick={statDec} />
        </div>
    )
}