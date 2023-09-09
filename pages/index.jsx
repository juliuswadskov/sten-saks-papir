import Head from 'next/head'
import useWindowSize from 'react-use/lib/useWindowSize'
import Link from 'next/link'
import Confetti from 'react-confetti'
import { useEffect, useState } from 'react'

const options = [
  "sten",
  "saks",
  "kniv"
]

export default function Home() {
  const [winRate, setWinRate] = useState(0)
  const [gamesWon, setGamesWon] = useState(0)
  const [gamesPlayed, setGamesPlayed] = useState(0)
  const [option, setOption] = useState("sten")
  const [aiOption, setAiOption] = useState()

  return (
    <div style={{
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      position: "absolute"
    }}>
      <fieldset style={{
        border: "1px solid #343434",
        borderRadius: "5px",
      }}>
          <legend>🪨✂️📃</legend>
          <span>Win rate <strong>{winRate.toFixed(1)}%</strong></span>
          <br/>
          <span>Du valgt <strong>{option}</strong></span>
          <br/>
          <span>{aiOption ? <span>Hjemmesidens har valgt <strong>{aiOption}</strong></span>: <span>Start et spil for at få hjemmesiden til at vælge</span>}</span>
          <br/>
          <br/>
          <select style={{
            border: "none",
            background: "#343434",
            color: "white",
            borderRadius: "3px",
            padding: "7px"
          }} onChange={(e) => {
            setOption(e.target.value)
          }}>
            <option>sten</option>
            <option>saks</option>
            <option>papir</option>
          </select>  <button style={{
            border: "none",
            background: "#343434",
            color: "white",
            borderRadius: "3px",
            padding: "7px"
          }} onClick={() => {
            let tmpAiOption = options[Math.floor(Math.random()*(options.length-1))]
            let tmpGamesPlayed = gamesPlayed+1
            let tmpGamesWon = gamesWon

            if (option == tmpAiOption) {
              tmpGamesWon = tmpGamesWon+1
            }

            console.log(option == tmpAiOption, option, tmpAiOption)
            console.log(tmpGamesWon, tmpGamesPlayed)

            setAiOption(tmpAiOption)
            setGamesPlayed(tmpGamesPlayed)
            setGamesWon(tmpGamesWon)
            setWinRate((tmpGamesWon/tmpGamesPlayed)*100)
          }}>Slå sten, saks, papir</button>
          <br/>
          <br/>
          <Link href='https://raag2005.dk'>
            <a target="_blank" style={{color: "#009CD3", fontWeight: "bolder", textDecoration: "underline"}}>lavet af raag2005</a>
          </Link>
        </fieldset>
      </div>
  )
}
