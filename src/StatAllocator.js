import { getDefaultNormalizer } from '@testing-library/react'
import react from 'react'
import { SourceMapGenerator } from 'source-map';

export default class StatAllocator extends react.Component {
    constructor({availPts, stats, setStats = null})
    {
        super({availPts, stats, setStats})
        this.state = {
            stats: stats,
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
    }
    render() {
        return (
            <div className="">
                <h1>{this.state.availPts}</h1>
                {Object.entries(this.state.stats).map(([key, value]) => (
                    <StatPoint
                    name={key}
                        count={value}
                        statInc={() => this.statInc(key)}
                        statDec={() => this.statDec(key)}
                        />
                ))}
                <button onClick={() => this.props?.setStats(this.state.stats)}>Im done!</button>
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