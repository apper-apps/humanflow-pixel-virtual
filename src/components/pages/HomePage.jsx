import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import Header from '@/components/organisms/Header'
import TextEditor from '@/components/organisms/TextEditor'
import MetricsBar from '@/components/organisms/MetricsBar'
import ActionToolbar from '@/components/organisms/ActionToolbar'
import ProcessingHistory from '@/components/organisms/ProcessingHistory'
import { textProcessingService } from '@/services/api/textProcessingService'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'

const HomePage = () => {
  const [originalText, setOriginalText] = useState('')
  const [humanizedText, setHumanizedText] = useState('')
  const [selectedTone, setSelectedTone] = useState('casual')
  const [selectedLanguage, setSelectedLanguage] = useState('english')
  const [isProcessing, setIsProcessing] = useState(false)
  const [aiReport, setAiReport] = useState(null)
  const [plagiarismReport, setPlagiarismReport] = useState(null)
  const [history, setHistory] = useState([])
  const [error, setError] = useState('')
  const [showComparison, setShowComparison] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleProcess = async () => {
    if (!originalText.trim()) {
      toast.error('Please enter text to humanize')
      return
    }

    setIsProcessing(true)
    setError('')

    try {
      const result = await textProcessingService.processText({
        text: originalText,
        tone: selectedTone,
        language: selectedLanguage
      })

      setHumanizedText(result.humanizedText)
      setAiReport(result.aiReport)
      setPlagiarismReport(result.plagiarismReport)
      setShowComparison(true)

      // Add to history
      const historyItem = {
        id: Date.now(),
        originalText,
        humanizedText: result.humanizedText,
        tone: selectedTone,
        language: selectedLanguage,
        timestamp: new Date(),
        aiReport: result.aiReport,
        plagiarismReport: result.plagiarismReport
      }

      setHistory(prev => [historyItem, ...prev.slice(0, 9)])
      toast.success('Text humanized successfully!')
    } catch (error) {
      setError(error.message)
      toast.error('Failed to process text')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleCopy = () => {
    if (humanizedText) {
      navigator.clipboard.writeText(humanizedText)
      toast.success('Text copied to clipboard!')
    }
  }

  const handleClear = () => {
    setOriginalText('')
    setHumanizedText('')
    setAiReport(null)
    setPlagiarismReport(null)
    setShowComparison(false)
    setError('')
    toast.info('Editor cleared')
  }

  const handleHistorySelect = (item) => {
    setOriginalText(item.originalText)
    setHumanizedText(item.humanizedText)
    setSelectedTone(item.tone)
    setSelectedLanguage(item.language)
    setAiReport(item.aiReport)
    setPlagiarismReport(item.plagiarismReport)
    setShowComparison(true)
  }

  const retryProcessing = () => {
    setError('')
    handleProcess()
  }

  if (loading) {
    return <Loading />
  }

  if (error && !originalText) {
    return <Error message={error} onRetry={retryProcessing} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header onClear={handleClear} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Metrics Bar */}
          <MetricsBar 
            aiReport={aiReport}
            plagiarismReport={plagiarismReport}
            originalText={originalText}
            humanizedText={humanizedText}
          />

          {/* Action Toolbar */}
          <ActionToolbar
            selectedTone={selectedTone}
            onToneChange={setSelectedTone}
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
            onProcess={handleProcess}
            onCopy={handleCopy}
            onToggleComparison={() => setShowComparison(!showComparison)}
            isProcessing={isProcessing}
            hasText={!!originalText.trim()}
            hasResult={!!humanizedText}
            showComparison={showComparison}
          />

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Text Editor */}
            <div className="lg:col-span-3">
              <TextEditor
                originalText={originalText}
                onOriginalTextChange={setOriginalText}
                humanizedText={humanizedText}
                isProcessing={isProcessing}
                showComparison={showComparison}
                error={error}
              />
            </div>

            {/* Processing History */}
            <div className="lg:col-span-1">
              <ProcessingHistory
                history={history}
                onHistorySelect={handleHistorySelect}
              />
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

export default HomePage