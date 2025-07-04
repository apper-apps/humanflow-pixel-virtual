import React from 'react'
import { motion } from 'framer-motion'
import { formatDistanceToNow } from 'date-fns'
import ApperIcon from '@/components/ApperIcon'
import Empty from '@/components/ui/Empty'

const ProcessingHistory = ({ history, onHistorySelect }) => {
  if (history.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <ApperIcon name="History" className="w-5 h-5 text-slate-600" />
          <h3 className="text-lg font-semibold text-slate-800">Processing History</h3>
        </div>
        <Empty 
          icon="Clock"
          title="No History Yet"
          description="Your processed texts will appear here for quick access."
          compact
        />
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <ApperIcon name="History" className="w-5 h-5 text-slate-600" />
        <h3 className="text-lg font-semibold text-slate-800">Processing History</h3>
        <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
          {history.length}
        </span>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {history.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onClick={() => onHistorySelect(item)}
            className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-primary hover:bg-blue-50 cursor-pointer transition-all duration-200 group"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium text-slate-700 capitalize">
                  {item.tone} • {item.language}
                </span>
              </div>
              <span className="text-xs text-slate-500">
                {formatDistanceToNow(new Date(item.timestamp), { addSuffix: true })}
              </span>
            </div>
            
            <p className="text-sm text-slate-600 line-clamp-3 mb-3">
              {item.originalText.length > 100 
                ? `${item.originalText.substring(0, 100)}...` 
                : item.originalText
              }
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <ApperIcon name="Bot" className="w-3 h-3 text-slate-500" />
                  <span className="text-xs text-slate-500">
                    {item.aiReport?.score || 0}% AI
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <ApperIcon name="Shield" className="w-3 h-3 text-slate-500" />
                  <span className="text-xs text-slate-500">
                    {item.plagiarismReport?.matchPercentage || 0}% Match
                  </span>
                </div>
              </div>
              <ApperIcon 
                name="ChevronRight" 
                className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors duration-200" 
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ProcessingHistory