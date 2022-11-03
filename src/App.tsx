import { useEffect, useState } from 'react'

export const App = () => {
  const [hour, setHour] = useState<string>('')
  const [minute, setMinute] = useState<string>('')
  const [second, setSecond] = useState<string>('')
  //
  const currTime = () => {
    let now = new Date()
    let hh = now.getHours()
    let mm = now.getMinutes()
    let ss = now.getSeconds()
    setHour(String(hh).padStart(2, '0'))
    setMinute(String(mm).padStart(2, '0'))
    setSecond(String(ss).padStart(2, '0'))
  }

  useEffect(() => {
    setTimeout(() => currTime(), 1000)
    currTime()
  }, [second])

  return (
    <main className='min-h-screen flex justify-around items-center bg-slate-300'>
      <div className='w-4/5 max-w-3xl p-10 flex flex-col sm:flex-row justify-center items-center gap-6 bg-teal-300 shadow-md shadow-teal-800 rounded-lg'>
        <div className='w-[200px] flex flex-col gap-4 tracking-widest py-10 bg-slate-900 text-center text-white font-bold rounded-lg shadow-md shadow-black'>
          <h3 className='text-8xl'>{hour}</h3>
          <span className='uppercase'>Horas</span>
        </div>
        <div className='w-[200px] flex flex-col gap-4 tracking-widest py-10 bg-slate-900 text-center text-white font-bold rounded-lg shadow-md shadow-black'>
          <h3 className='text-8xl'>{minute}</h3>
          <span className='uppercase'>Minutos</span>
        </div>
        <div className='w-[200px] flex flex-col gap-4 tracking-widest py-10 bg-slate-900 text-center text-white font-bold rounded-lg shadow-md shadow-black'>
          <h3 className='text-8xl'>{second}</h3>
          <span className='uppercase'>Segundos</span>
        </div>
      </div>
    </main>
  )
}
