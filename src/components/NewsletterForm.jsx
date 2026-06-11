import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function NewsletterForm() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('idle')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email) return

        setStatus('loading')
        setMessage('')

        const portalId = "245302363"
        const formGuid = "21fe60e4-af6e-4be8-ad3e-e292474f059c"
        const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`

        const body = {
            fields: [
                { name: "email", value: email }
            ]
        }

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })

            if (response.ok) {
                setStatus('success')
                setMessage("You've successfully subscribed!")
                setEmail('')
                setTimeout(() => { setStatus('idle'); setMessage('') }, 5000)
            } else {
                const errResponse = await response.json()
                setStatus('error')
                if (errResponse?.errors?.[0]?.errorType === "MISSING_REQUIRED_FIELDS") {
                    setMessage("HubSpot expects more fields. Please edit the form.")
                } else {
                    setMessage("Something went wrong. Please try again.")
                }
            }
        } catch (err) {
            setStatus('error')
            setMessage('Network error. Please try again later.')
        }
    }

    return (
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full h-full justify-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 border border-accent/20">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>

            <h3 className="text-xl md:text-2xl font-accent text-secondary-light mb-4 leading-tight">Subscribe to our Newsletter</h3>
            <p className="text-secondary-mid font-primary text-sm mb-8 max-w-sm">
                Get the latest updates on infrastructure delivery intelligence straight to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-sm relative">
                <div className="flex flex-col gap-3">
                    <input
                        type="email"
                        required
                        placeholder="Enter your work email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-primary-bg border border-black/10 rounded-lg px-4 py-2 text-secondary-light font-primary text-sm focus:outline-none focus:border-accent/50 focus:bg-white transition-all"
                        disabled={status === 'loading' || status === 'success'}
                    />
                    <button
                        type="submit"
                        disabled={status === 'loading' || status === 'success'}
                        className={`w-full sm:w-[200px] flex items-center justify-center px-4 py-2.5 rounded-lg font-bold uppercase tracking-widest text-xs transition-all
                        ${status === 'success' ? 'bg-green-500/10 text-green-700 border border-green-500/20' :
                                status === 'loading' ? 'bg-accent/50 text-white cursor-not-allowed' :
                                    'bg-accent text-white hover:bg-accent-hover hover:-translate-y-0.5'
                            }
                    `}
                    >
                        {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe Here!'}
                    </button>
                </div>

                {message && (
                    <motion.p
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`absolute -bottom-8 left-0 text-xs font-primary w-full md:text-left ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}
                    >
                        {message}
                    </motion.p>
                )}
            </form>
        </div>
    )
}
