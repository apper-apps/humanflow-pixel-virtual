import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const AIScoreMeter = ({ score, confidence, hasData }) => {
  const getScoreColor = (score) => {
    if (score >= 70) return 'text-red-600'
    if (score >= 40) return 'text-yellow-600'
    return 'text-green-600'
  }

  const getScoreLabel = (score) => {
    if (score >= 70) return 'High AI Detection'
    if (score >= 40) return 'Moderate AI Detection'
    return 'Low AI Detection'
  }

  const circumference = 2 * Math.PI * 45
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (score / 100) * circumference

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <ApperIcon name="Bot" className="w-5 h-5 text-slate-600" />
          <h3 className="text-lg font-semibold text-slate-800">AI Detection</h3>
        </div>
        {hasData && (
          <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
            {confidence}% confident
          </span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="relative w-24 h-24">
          <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#e2e8f0"
              strokeWidth="8"
              fill="none"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              stroke={score >= 70 ? '#dc2626' : score >= 40 ? '#d97706' : '#059669'}
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-2xl font-bold ${getScoreColor(score)}`}>
              {hasData ? `${score}%` : '0%'}
            </span>
          </div>
        </div>

        <div className="flex-1 ml-6">
          <div className={`text-sm font-medium mb-1 ${getScoreColor(score)}`}>
            {hasData ? getScoreLabel(score) : 'Ready to analyze'}
          </div>
          <div className="text-xs text-slate-500">
            {hasData ? 'Lower scores indicate more human-like text' : 'Process text to see AI detection score'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIScoreMeter