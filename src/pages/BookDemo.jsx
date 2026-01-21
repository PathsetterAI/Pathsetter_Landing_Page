import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AlfredLogo from '../assets/usp/ALFRED.png'

function BookDemo() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [step, setStep] = useState(1)
  
  // Real Calendar Logic
  const today = new Date(2026, 0, 21) // Started at Jan 21, 2026 as per context
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 0, 1)) // Start at Jan 1 2026
  const [selectedDateObject, setSelectedDateObject] = useState(null)
  
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    description: ''
  })

  // Generate Calendar Data
  const getDaysInMonth = (date) => {
     const year = date.getFullYear()
     const month = date.getMonth()
     const daysInMonth = new Date(year, month + 1, 0).getDate()
     const firstDayOfMonth = new Date(year, month, 1).getDay() // 0 = Sun, 1 = Mon...
     return { daysInMonth, firstDayOfMonth }
  }

  const { daysInMonth, firstDayOfMonth } = getDaysInMonth(currentMonth)
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  
  // Array of blank slots before 1st of month
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i)
  // Array of days
  const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const timeSlots = [
    '4:00 PM', '4:30 PM', '4:45 PM', '5:00 PM', '5:30 PM'
  ]

  const handlePrevMonth = () => {
     setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
     setSelectedDate(null)
     // Keep selected time? No, maybe reset
  }

  const handleNextMonth = () => {
     setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
     setSelectedDate(null)
  }

  const isDateDisabled = (day) => {
     const checkDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
     // Normalize time for comparison
     checkDate.setHours(0,0,0,0)
     const todayNorm = new Date(today)
     todayNorm.setHours(0,0,0,0)
     
     return checkDate < todayNorm
  }

  const handleDateClick = (day) => {
    if (isDateDisabled(day)) return
    
    setSelectedDate(day)
    // Store full date object for display/logic
    setSelectedDateObject(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))
    setSelectedTime(null) 
  }

  const handleNext = () => {
    if (selectedDate && selectedTime) {
      setStep(2)
    }
  }

  const handleBack = () => {
    setStep(1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle submission logic
    console.log({ 
       selectedDate: selectedDateObject ? selectedDateObject.toISOString() : null, 
       selectedTime, 
       ...formData 
    })
    alert('Demo Request Received!')
  }

  return (
    <div className="bg-primary-bg min-h-screen text-secondary-light selection:bg-accent/30 selection:text-white font-primary">
      <Navbar />

      <main className="pt-32 pb-20 px-4 sm:px-8 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

        <div className="w-full max-w-5xl relative z-10">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-accent text-white mb-4">Book a Demo</h1>
            <p className="text-secondary-mid text-lg">See how Alfred can transform your project delivery.</p>
          </motion.div>

          {/* Main Card */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col md:flex-row min-h-[600px]">
            
            {/* Left Sidebar (Info) */}
            <div className="hidden md:flex md:w-1/3 bg-white/[0.02] border-r border-white/5 p-8 flex-col justify-between relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-50" />
               
               <div>
                 <div className="mb-6">
                    <img src={AlfredLogo} alt="Alfred" className="w-auto h-7 object-contain" />
                 </div>
                 <h2 className="text-xl font-accent text-white mb-2">Demo</h2>
                 <p className="text-secondary-mid text-sm mb-8">30 min • Google Meet</p>
                 
                 <div className="space-y-4">
                    <p className="text-sm text-secondary-light flex items-center gap-3">
                       <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                       30 Minutes
                    </p>
                    <p className="text-sm text-secondary-light flex items-center gap-3">
                       <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                       Google Meet
                    </p>
                 </div>
               </div>

               {step === 2 && selectedDateObject && selectedTime && (
                 <div className="mt-8 pt-8 border-t border-white/10 animate-fadeIn">
                    <p className="text-xs font-bold text-accent uppercase tracking-widest mb-2">Selected Time</p>
                    <p className="text-white text-lg font-medium">
                       {selectedDateObject.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                    <p className="text-secondary-light">
                       {selectedTime}
                    </p>
                 </div>
               )}
            </div>

            {/* Right Content Area */}
            <div className="flex-1 p-6 sm:p-10 bg-gradient-to-br from-transparent to-white/[0.01]">
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="h-full flex flex-col"
                  >
                    <h3 className="text-xl font-accent text-white mb-6">Select a Date & Time</h3>
                    
                    <div className="flex flex-col lg:flex-row gap-8 h-full">
                       {/* Calendar Grid */}
                       <div className="flex-1">
                          <div className="flex justify-between items-center mb-6">
                             <span className="text-lg font-semibold text-white">
                                {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                             </span>
                             <div className="flex gap-2">
                                <button 
                                   onClick={handlePrevMonth}
                                   className="p-2 rounded-lg hover:bg-white/5 text-secondary-mid hover:text-white transition-colors"
                                >
                                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                </button>
                                <button 
                                   onClick={handleNextMonth}
                                   className="p-2 rounded-lg hover:bg-white/5 text-secondary-mid hover:text-white transition-colors"
                                >
                                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </button>
                             </div>
                          </div>

                          <div className="grid grid-cols-7 gap-2 mb-2">
                             {days.map(d => (
                                <div key={d} className="text-xs text-center font-bold text-secondary-mid py-2">{d}</div>
                             ))}
                          </div>
                          <div className="grid grid-cols-7 gap-2">
                             {/* Empty slots */}
                             {blanks.map(i => <div key={`empty-${i}`} />)}
                             
                             {monthDays.map(date => {
                                const isDisabled = isDateDisabled(date)
                                return (
                                <button
                                   key={date}
                                   onClick={() => handleDateClick(date)}
                                   disabled={isDisabled}
                                   className={`aspect-square rounded-xl text-sm font-medium transition-all duration-300 relative group ${
                                      selectedDate === date 
                                      ? 'bg-accent text-primary-bg shadow-[0_0_15px_rgba(0,191,153,0.4)]' 
                                      : isDisabled 
                                         ? 'bg-transparent text-white/10 cursor-not-allowed'
                                         : 'bg-white/5 text-secondary-light hover:bg-white/10 hover:text-white'
                                   }`}
                                >
                                   {date}
                                </button>
                             )})}
                          </div>
                       </div>

                       {/* Time Slots */}
                       <div className={`lg:w-48 overflow-y-auto custom-scrollbar transition-all duration-500 ${selectedDate ? 'opacity-100 translate-x-0' : 'opacity-50 translate-x-4 pointer-events-none'}`}>
                          <h4 className="text-sm font-bold text-secondary-mid mb-4 uppercase tracking-widest">Available Times</h4>
                          <div className="space-y-3">
                             {timeSlots.map(time => (
                                <button
                                   key={time}
                                   onClick={() => {
                                      setSelectedTime(time)
                                      setStep(2) // Auto advance or wait for button? User can click next
                                   }}
                                   className={`w-full py-3 px-4 rounded-xl text-sm font-medium border transition-all duration-300 text-left relative overflow-hidden group ${
                                      selectedTime === time 
                                      ? 'border-accent bg-accent/10 text-accent shadow-[0_0_15px_rgba(0,191,153,0.2)]' 
                                      : 'border-white/10 bg-white/[0.02] text-secondary-light hover:border-accent/50 hover:text-white'
                                   }`}
                                >
                                   {time}
                                   {selectedTime === time && (
                                      <motion.div layoutId="timeActive" className="absolute inset-0 bg-accent/5" />
                                   )}
                                </button>
                             ))}
                          </div>
                       </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="h-full flex flex-col"
                  >
                     <div className="flex items-center gap-4 mb-8">
                        <button onClick={handleBack} className="p-2 rounded-full hover:bg-white/5 text-secondary-mid hover:text-white transition-colors">
                           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <h3 className="text-xl font-accent text-white">Your Information</h3>
                     </div>

                     <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label className="text-xs font-bold text-secondary-mid uppercase tracking-widest">First Name *</label>
                              <input 
                                 type="text" 
                                 required
                                 className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/50 focus:bg-white/10 transition-colors duration-300"
                                 value={formData.firstName}
                                 onChange={e => setFormData({...formData, firstName: e.target.value})}
                              />
                           </div>
                           <div className="space-y-2">
                              <label className="text-xs font-bold text-secondary-mid uppercase tracking-widest">Last Name *</label>
                              <input 
                                 type="text" 
                                 required
                                 className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/50 focus:bg-white/10 transition-colors duration-300"
                                 value={formData.lastName}
                                 onChange={e => setFormData({...formData, lastName: e.target.value})}
                              />
                           </div>
                        </div>

                        <div className="space-y-2">
                           <label className="text-xs font-bold text-secondary-mid uppercase tracking-widest">Email Address *</label>
                           <input 
                              type="email" 
                              required
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/50 focus:bg-white/10 transition-colors duration-300"
                              value={formData.email}
                              onChange={e => setFormData({...formData, email: e.target.value})}
                           />
                        </div>

                         <div className="space-y-2">
                           <label className="text-xs font-bold text-secondary-mid uppercase tracking-widest">Company Name *</label>
                           <input 
                              type="text" 
                              required
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/50 focus:bg-white/10 transition-colors duration-300"
                              value={formData.company}
                              onChange={e => setFormData({...formData, company: e.target.value})}
                           />
                        </div>

                        <div className="space-y-2">
                           <label className="text-xs font-bold text-secondary-mid uppercase tracking-widest">Project Description</label>
                           <textarea 
                              rows={3}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/50 focus:bg-white/10 transition-colors duration-300 resize-none"
                              value={formData.description}
                              onChange={e => setFormData({...formData, description: e.target.value})}
                           />
                        </div>

                        <div className="pt-6 flex justify-end">
                           <button 
                              type="submit" 
                              className="bg-accent text-primary-bg px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-accent-hover transition-all shadow-[0_0_20px_rgba(0,191,153,0.3)] hover:shadow-[0_0_30px_rgba(0,191,153,0.5)] transform hover:-translate-y-1 w-full md:w-auto"
                           >
                              Confirm Booking
                           </button>
                        </div>
                     </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default BookDemo
