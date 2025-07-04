import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const TextInputPanel = ({ value, onChange, isProcessing, title, placeholder }) => {
  const wordCount = value.trim().split(/\s+/).filter(word => word.length > 0).length
  const charCount = value.length

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ApperIcon name="Edit3" className="w-5 h-5 text-slate-600" />
            <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
          </div>
          <div className="flex items-center space-x-4 text-sm text-slate-500">
            <span>{wordCount} words</span>
            <span>{charCount} characters</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <textarea
          id="text-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={isProcessing}
          className="w-full h-96 p-6 text-slate-700 placeholder-slate-400 border-0 focus:ring-0 focus:outline-none resize-none disabled:bg-slate-50 disabled:text-slate-500"
          style={{ fontFamily: 'Inter, sans-serif' }}
        />
        
        {isProcessing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-blue-50/50 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="flex items-center space-x-3 text-primary">
              <ApperIcon name="Loader2" className="w-6 h-6 animate-spin" />
              <span className="text-sm font-medium">Processing...</span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default TextInputPanel