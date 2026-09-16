import { useState, useEffect, useCallback } from 'react';

const CANDIDATE_URLS = [
  '/BM6A8382.jpeg',
  '/BM6A8382.jpg',
  '/saanika.jpeg',
  '/saanika.jpg',
];

export function useBrokerPhoto() {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [photoSrc, setPhotoSrc] = useState<string | null>(() => {
    try {
      return localStorage.getItem('saanika_custom_photo') || null;
    } catch {
      return null;
    }
  });
  const [hasError, setHasError] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Sync photo updates across components & tabs
  useEffect(() => {
    const handleUpdate = () => {
      try {
        const saved = localStorage.getItem('saanika_custom_photo');
        if (saved) {
          setPhotoSrc(saved);
          setHasError(false);
        }
      } catch {
        // ignore
      }
    };

    window.addEventListener('storage', handleUpdate);
    window.addEventListener('saanika_photo_updated', handleUpdate);
    return () => {
      window.removeEventListener('storage', handleUpdate);
      window.removeEventListener('saanika_photo_updated', handleUpdate);
    };
  }, []);

  const handleImageError = useCallback(() => {
    if (!photoSrc) {
      if (candidateIndex < CANDIDATE_URLS.length - 1) {
        setCandidateIndex(prev => prev + 1);
      } else {
        setHasError(true);
      }
    } else {
      // Custom photo failed, fallback to candidate URLs
      setPhotoSrc(null);
      setCandidateIndex(0);
    }
  }, [photoSrc, candidateIndex]);

  const savePhoto = useCallback(async (file: File) => {
    setIsSaving(true);
    try {
      // 1. Read as Data URL for immediate display
      const reader = new FileReader();
      reader.onload = async (e) => {
        const dataUrl = e.target?.result as string;
        if (dataUrl) {
          setPhotoSrc(dataUrl);
          setHasError(false);
          try {
            localStorage.setItem('saanika_custom_photo', dataUrl);
          } catch (err) {
            console.warn('localStorage quota reached or unavailable', err);
          }
          window.dispatchEvent(new Event('saanika_photo_updated'));
        }

        // 2. Persist exact binary file to server disk via /api/save-photo
        try {
          await fetch('/api/save-photo', {
            method: 'POST',
            body: file,
          });
        } catch (serverErr) {
          console.warn('Could not persist to server disk', serverErr);
        } finally {
          setIsSaving(false);
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error('Error saving photo:', err);
      setIsSaving(false);
    }
  }, []);

  const resetPhoto = useCallback(() => {
    try {
      localStorage.removeItem('saanika_custom_photo');
    } catch {
      // ignore
    }
    setPhotoSrc(null);
    setCandidateIndex(0);
    setHasError(false);
    window.dispatchEvent(new Event('saanika_photo_updated'));
  }, []);

  const currentSrc = photoSrc || CANDIDATE_URLS[candidateIndex];

  return {
    currentSrc,
    hasError,
    isSaving,
    handleImageError,
    savePhoto,
    resetPhoto,
  };
}
