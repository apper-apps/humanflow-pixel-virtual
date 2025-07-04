import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const WordCounter = ({ originalText, humanizedText }) => {
  const originalWords = originalText.trim().split(/\s+/).filter(word => word.length > 0).length
  const humanizedWords = humanizedText.trim().split(/\s+/).filter(word => word.length > 0).length
  const difference = humanizedWords - originalWords
  const hasData = originalText.length > 0

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <ApperIcon name="Type" className="w-5 h-5 text-slate-600" />
        <h3 className="text-lg font-semibold text-slate-800">Word Count</h3>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-600">Original</span>
          <span className="text-lg font-semibold text-slate-800">
            {originalWords}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-600">Humanized</span>
          <span className="text-lg font-semibold text-slate-800">
            {humanizedWords}
          </span>
        </div>

        {hasData && humanizedText && (
          <div className="flex items-center justify-between pt-2 border-t border-slate-200">
            <span className="text-sm text-slate-600">Difference</span>
            <span className={`text-sm font-medium ${
              difference > 0 ? 'text-green-600' : difference < 0 ? 'text-red-600' : 'text-slate-600'
            }`}>
              {difference > 0 ? '+' : ''}{difference}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default WordCounter