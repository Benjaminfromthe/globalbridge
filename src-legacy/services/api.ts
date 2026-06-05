import type { SuperPlatformData } from '../types'

export async function fetchPlatformPreview(): Promise<SuperPlatformData> {
  return {
    id: 'platform-preview',
    title: 'GlobalBridge Super Platform',
    summary: 'A unified, modular foundation for marketplace, tourism, jobs, and social experiences.',
  }
}
