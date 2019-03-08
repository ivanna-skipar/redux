import React from 'react'
import PlayerAPI from './api'

const Schedule = () => {
    let parni = PlayerAPI.all().filter( p => (p.number)%2 === 0 )
    let neParni = PlayerAPI.all().filter( p => (p.number)%2 !== 0 )



    return (
        <div>
            <p>Schedule</p>
            <table>
                <tbody>
                <tr>
                    <td>Команда 1</td>
                    {
                        neParni.map(p => (
                            <td key={p.number}>{p.name}</td>
                        ))
                    }
                </tr>
                <tr>
                <td>Команда 2</td>
                    {
                        parni.map(p => (
                            <td key={p.number}>{p.name}</td>
                        ))
                    }
                </tr>
                </tbody>
            </table>
        </div>
    )
}



export default Schedule;