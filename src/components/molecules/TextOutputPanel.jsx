import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const TextOutputPanel = ({ value, isProcessing, title, originalText }) => {
  const wordCount = value.trim().split(/\s+/).filter(word => word.length > 0).length
  const charCount = value.length
  const improvement = originalText && value ? Math.round((value.length - originalText.length) / originalText.length * 100) : 0

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-b border-slate-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ApperIcon name="CheckCircle" className="w-5 h-5 text-green-600" />
            <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
          </div>
          <div className="flex items-center space-x-4 text-sm text-slate-500">
            <span>{wordCount} words</span>
            <span>{charCount} characters</span>
            {improvement !== 0 && (
              <span className={`font-medium ${improvement > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {improvement > 0 ? '+' : ''}{improvement}%
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="relative">
        <textarea
          value={value}
          readOnly
          className="w-full h-96 p-6 text-slate-700 border-0 focus:ring-0 focus:outline-none resize-none bg-gradient-to-br from-white to-green-50/20"
          style={{ fontFamily: 'Inter, sans-serif' }}
        />
        
        {isProcessing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-green-50/50 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="flex items-center space-x-3 text-green-600">
              <ApperIcon name="Loader2" className="w-6 h-6 animate-spin" />
              <span className="text-sm font-medium">Generating...</span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default TextOutputPanel