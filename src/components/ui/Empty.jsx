import React from "react";
import { motion } from "framer-motion";
import AppIcon from "@/components/AppIcon";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
const Empty = ({ 
  icon = 'FileText', 
  title = 'No data available', 
  description = 'There is nothing to display at the moment.', 
  actionText, 
  onAction,
  compact = false 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`text-center ${compact ? 'py-8' : 'py-16'}`}
    >
      <div className={`${compact ? 'w-12 h-12' : 'w-16 h-16'} bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-4`}>
        <ApperIcon name={icon} className={`${compact ? 'w-6 h-6' : 'w-8 h-8'} text-slate-500`} />
      </div>
      
      <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-semibold text-slate-800 mb-2`}>
        {title}
      </h3>
      
      <p className={`text-slate-600 mb-6 ${compact ? 'text-sm' : 'text-base'} max-w-md mx-auto`}>
        {description}
      </p>
      
      {actionText && onAction && (
        <Button
          onClick={onAction}
          className="bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary shadow-lg hover:shadow-xl"
        >
          <ApperIcon name="Plus" className="w-4 h-4 mr-2" />
          {actionText}
        </Button>
      )}
    </motion.div>
  )
}

export default Empty