import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'

const Header = ({ onClear }) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl shadow-lg">
              <ApperIcon name="Zap" className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                HumanFlow
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                AI Text Humanization Tool
              </p>
            </div>
          </motion.div>

          {/* Header Actions */}
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              variant="outline"
              size="sm"
              onClick={onClear}
              className="text-slate-600 hover:text-slate-800 border-slate-200 hover:border-slate-300"
            >
              <ApperIcon name="RotateCcw" className="w-4 h-4 mr-2" />
              Clear All
            </Button>
            
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Online</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}

export default Header