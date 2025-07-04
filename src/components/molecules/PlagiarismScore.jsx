import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const PlagiarismScore = ({ percentage, sources, hasData }) => {
  const getScoreColor = (percentage) => {
    if (percentage >= 30) return 'text-red-600'
    if (percentage >= 15) return 'text-yellow-600'
    return 'text-green-600'
  }

  const getScoreLabel = (percentage) => {
    if (percentage >= 30) return 'High Similarity'
    if (percentage >= 15) return 'Moderate Similarity'
    return 'Low Similarity'
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <ApperIcon name="Shield" className="w-5 h-5 text-slate-600" />
          <h3 className="text-lg font-semibold text-slate-800">Plagiarism Check</h3>
        </div>
        {hasData && sources.length > 0 && (
          <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
            {sources.length} sources
          </span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className={`text-3xl font-bold ${getScoreColor(percentage)}`}>
            {hasData ? `${percentage}%` : '0%'}
          </div>
          <div className="h-12 w-1 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${
                percentage >= 30 ? 'bg-red-500' : percentage >= 15 ? 'bg-yellow-500' : 'bg-green-500'
              }`}
              initial={{ height: 0 }}
              animate={{ height: `${percentage}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>

        <div className="flex-1 ml-4">
          <div className={`text-sm font-medium mb-1 ${getScoreColor(percentage)}`}>
            {hasData ? getScoreLabel(percentage) : 'Ready to check'}
          </div>
          <div className="text-xs text-slate-500">
            {hasData ? 'Similarity with online sources' : 'Process text to check for plagiarism'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlagiarismScore