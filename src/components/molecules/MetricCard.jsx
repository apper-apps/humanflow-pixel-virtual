import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const MetricCard = ({ title, value, icon, color = 'primary', subtitle, trend }) => {
  const colorClasses = {
    primary: 'text-primary bg-blue-50 border-blue-100',
    success: 'text-green-600 bg-green-50 border-green-100',
    warning: 'text-yellow-600 bg-yellow-50 border-yellow-100',
    error: 'text-red-600 bg-red-50 border-red-100',
    info: 'text-blue-600 bg-blue-50 border-blue-100'
  }

  const iconColorClasses = {
    primary: 'text-primary',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    error: 'text-red-600',
    info: 'text-blue-600'
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`bg-white rounded-xl shadow-lg border-2 ${colorClasses[color]} p-6 transition-all duration-200`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${colorClasses[color]}`}>
          <ApperIcon name={icon} className={`w-6 h-6 ${iconColorClasses[color]}`} />
        </div>
        {trend && (
          <div className={`flex items-center space-x-1 text-sm ${
            trend > 0 ? 'text-green-600' : 'text-red-600'
          }`}>
            <ApperIcon 
              name={trend > 0 ? 'TrendingUp' : 'TrendingDown'} 
              className="w-4 h-4" 
            />
            <span>{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
      
      <h3 className="text-2xl font-bold text-slate-800 mb-1">{value}</h3>
      <p className="text-sm text-slate-600 font-medium">{title}</p>
      
      {subtitle && (
        <p className="text-xs text-slate-500 mt-2">{subtitle}</p>
      )}
    </motion.div>
  )
}

export default MetricCard