import { getDefaultNormalizer } from '@testing-library/react'
import react from 'react'
import { SourceMapGenerator } from 'source-map';

export default class StatAllocator extends react.Component {
    constructor({availPts, onStatAllocation = null})
    {
        super({availPts, onStatAllocation})
        this.state = {
            stats: {
                atk: 0,
                mag: 0,
                def: 0,
                stl: 0,
            },
            availPts: availPts
        }
        this.statInc = this.statInc.bind(this);
        this.statDec = this.statDec.bind(this);
    }
    statInc(statName) {
        if (this.state.availPts <= 0)
            return;
        console.log("AAAAAAAAAA")
        let stats = {
            stats: this.state.stats,
            availPts: this.state.availPts-1
        }
        stats.stats[statName] += 1
        this.setState(stats)
        this.props.onStatAllocation?.(stats.stats)
    }
    statDec(statName) {
        if (this.state.stats[statName] <= 0)
            return;
        let stats = {
            stats: this.state.stats,
            availPts: this.state.availPts+1
        }
        stats.stats[statName] -= 1
        this.setState(stats)
        this.props.onStatAllocation?.(stats.stats)
    }
    render() {
        return (
            <div className="">
                <h1>{this.state.availPts}</h1>
                <StatPoint
                    name="atk"
                    count={this.state.stats.atk}
                    statInc={() => this.statInc("atk")}
                    statDec={() => this.statDec("atk")}
                    />
                <StatPoint
                    name="mag"
                    count={this.state.stats.mag}
                    statInc={() => this.statInc("mag")}
                    statDec={() => this.statDec("mag")}
                    />
                <StatPoint
                    name="stl"
                    count={this.state.stats.stl}
                    statInc={() => this.statInc("stl")}
                    statDec={() => this.statDec("stl")}
                    />
                <StatPoint
                    name="def"
                    count={this.state.stats.def}
                    statInc={() => this.statInc("def")}
                    statDec={() => this.statDec("def")}
                    />
            </div>
        )
    }
}

function StatPoint({name, count, statInc, statDec}) {
    return (
        <div>
            <span>{name}</span>
            <span>{count}</span>
            <button onClick={statInc}>+</button>
            <button onClick={statDec}>-</button>
        </div>
    )
}