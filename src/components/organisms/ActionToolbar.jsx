import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import Select from '@/components/atoms/Select'
import ApperIcon from '@/components/ApperIcon'

const ActionToolbar = ({
  selectedTone,
  onToneChange,
  selectedLanguage,
  onLanguageChange,
  onProcess,
  onCopy,
  onToggleComparison,
  isProcessing,
  hasText,
  hasResult,
  showComparison
}) => {
  const toneOptions = [
    { value: 'casual', label: 'Casual' },
    { value: 'formal', label: 'Formal' },
    { value: 'creative', label: 'Creative' },
    { value: 'professional', label: 'Professional' },
    { value: 'friendly', label: 'Friendly' }
  ]

  const languageOptions = [
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'french', label: 'French' },
    { value: 'german', label: 'German' },
    { value: 'italian', label: 'Italian' },
    { value: 'portuguese', label: 'Portuguese' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 mb-8"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Settings */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-2">
            <ApperIcon name="Settings" className="w-5 h-5 text-slate-500" />
            <span className="text-sm font-medium text-slate-700">Settings:</span>
          </div>
          
          <Select
            value={selectedTone}
            onChange={onToneChange}
            options={toneOptions}
            placeholder="Select tone"
            className="min-w-[120px]"
          />
          
          <Select
            value={selectedLanguage}
            onChange={onLanguageChange}
            options={languageOptions}
            placeholder="Select language"
            className="min-w-[120px]"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
          <Button
            onClick={onProcess}
            disabled={!hasText || isProcessing}
            className="bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            size="lg"
          >
            {isProcessing ? (
              <>
                <ApperIcon name="Loader2" className="w-5 h-5 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <ApperIcon name="Zap" className="w-5 h-5 mr-2" />
                Humanize Text
              </>
            )}
          </Button>

          {hasResult && (
            <div className="flex space-x-2">
              <Button
                onClick={onCopy}
                variant="outline"
                size="sm"
                className="text-slate-600 hover:text-slate-800 border-slate-200 hover:border-slate-300"
              >
                <ApperIcon name="Copy" className="w-4 h-4 mr-2" />
                Copy Result
              </Button>
              
              <Button
                onClick={onToggleComparison}
                variant="outline"
                size="sm"
                className={`border-slate-200 hover:border-slate-300 ${
                  showComparison 
                    ? 'bg-primary text-white hover:bg-blue-600' 
                    : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                <ApperIcon name="Eye" className="w-4 h-4 mr-2" />
                {showComparison ? 'Hide' : 'Show'} Comparison
              </Button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ActionToolbar