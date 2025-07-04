import React from 'react'
import { motion } from 'framer-motion'
import MetricCard from '@/components/molecules/MetricCard'
import AIScoreMeter from '@/components/molecules/AIScoreMeter'
import PlagiarismScore from '@/components/molecules/PlagiarismScore'
import WordCounter from '@/components/molecules/WordCounter'

const MetricsBar = ({ aiReport, plagiarismReport, originalText, humanizedText }) => {
  const hasData = originalText.trim() || humanizedText.trim()

  if (!hasData) {
    return (
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md border border-slate-200 p-4">
              <div className="animate-pulse">
                <div className="h-4 bg-slate-200 rounded w-1/2 mb-2"></div>
                <div className="h-8 bg-slate-200 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="mb-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {/* AI Detection Score */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <AIScoreMeter 
            score={aiReport?.score || 0}
            confidence={aiReport?.confidence || 0}
            hasData={!!aiReport}
          />
        </motion.div>

        {/* Plagiarism Score */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <PlagiarismScore 
            percentage={plagiarismReport?.matchPercentage || 0}
            sources={plagiarismReport?.sources || []}
            hasData={!!plagiarismReport}
          />
        </motion.div>

        {/* Word Counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <WordCounter 
            originalText={originalText}
            humanizedText={humanizedText}
          />
        </motion.div>

        {/* Processing Time */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <MetricCard
            title="Processing Time"
            value={aiReport ? "2.3s" : "0.0s"}
            icon="Clock"
            color="info"
            subtitle={aiReport ? "Fast processing" : "Ready to process"}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default MetricsBar