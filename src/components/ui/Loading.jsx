import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-2xl border border-slate-200 p-8 max-w-md mx-4"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <ApperIcon name="Loader2" className="w-8 h-8 text-white animate-spin" />
          </div>
          
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Loading HumanFlow
          </h3>
          
          <p className="text-slate-600 mb-6">
            Preparing your text humanization workspace...
          </p>
          
          <div className="space-y-3">
            <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-blue-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-8 bg-slate-100 rounded shimmer"></div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Loading