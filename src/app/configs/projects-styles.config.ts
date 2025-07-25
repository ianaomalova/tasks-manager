export type ProjectColor = 'purple' | 'green' | 'blue' | 'orange' | 'red' | 'yellow'

export const PROJECT_STYLE_MAP: Record<ProjectColor, {
  gradientIcon: string
  progressClass: string
  bgColor: string
}> = {
  purple: {
    gradientIcon: 'bg-gradient-to-br from-purple-500 to-purple-700',
    progressClass: 'linear-gradient(90deg, #7c3aed, #d8b4fe)', // от насыщенного к светлому фиолетовому
    bgColor: '#6366f1',
  },
  green: {
    gradientIcon: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
    progressClass: 'linear-gradient(90deg, #10b981, #bbf7d0)', // от насыщенного к светло-зелёному
    bgColor: '#10b981',
  },
  blue: {
    gradientIcon: 'bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500',
    progressClass: 'linear-gradient(90deg, #446cef, #b0edf8)', // оставить как есть
    bgColor: '#0666d4',
  },
  orange: {
    gradientIcon: 'bg-gradient-to-br from-orange-500 to-amber-600',
    progressClass: 'linear-gradient(90deg, #f97316, #fed7aa)', // от насыщенного к светло-оранжевому
    bgColor: '#f59e0b',
  },
  red: {
    gradientIcon: 'bg-gradient-to-br from-red-400 to-red-600',
    progressClass: 'linear-gradient(90deg, #ef4444, #fecaca)', // от насыщенного к светло-красному
    bgColor: '#ef4444',
  },
  yellow: {
    gradientIcon: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
    progressClass: 'linear-gradient(90deg, #eab308, #fef9c3)', // от насыщенного к светло-жёлтому
    bgColor: '#f5e90b',
  },
}
