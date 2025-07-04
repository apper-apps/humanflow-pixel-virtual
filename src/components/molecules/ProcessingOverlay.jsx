import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const ProcessingOverlay = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl shadow-2xl border border-slate-200 p-8 max-w-md mx-4"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <ApperIcon name="Zap" className="w-8 h-8 text-white animate-pulse" />
          </div>
          
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Humanizing Your Text
          </h3>
          
          <p className="text-slate-600 mb-6">
            Our AI is analyzing and transforming your content to make it more natural and human-like.
          </p>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">Analyzing text structure...</span>
              <ApperIcon name="Check" className="w-4 h-4 text-green-500" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">Detecting AI patterns...</span>
              <ApperIcon name="Check" className="w-4 h-4 text-green-500" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">Generating human-like content...</span>
              <ApperIcon name="Loader2" className="w-4 h-4 text-primary animate-spin" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProcessingOverlay