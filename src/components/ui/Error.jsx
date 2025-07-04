import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'

const Error = ({ message, onRetry }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-2xl border border-slate-200 p-8 max-w-md mx-4"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <ApperIcon name="AlertCircle" className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Oops! Something went wrong
          </h3>
          
          <p className="text-slate-600 mb-6">
            {message || 'We encountered an error while loading HumanFlow. Please try again.'}
          </p>
          
          <div className="space-y-3">
            <Button
              onClick={onRetry}
              className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary"
            >
              <ApperIcon name="RefreshCw" className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            
            <Button
              variant="outline"
              onClick={() => window.location.reload()}
              className="w-full"
            >
              <ApperIcon name="RotateCcw" className="w-4 h-4 mr-2" />
              Reload Page
            </Button>
          </div>
          
          <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
            <p className="text-sm text-red-700">
              If this problem persists, please check your internet connection or try again later.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Error