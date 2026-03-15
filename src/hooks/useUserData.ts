import { useState, useCallback, useEffect } from "react";

export interface UserReview {
  movieId: string;
  nota: number;
  texto: string;
  data: string;
}

interface UserData {
  favoritos: string[];
  watchlist: string[];
  avaliacoes: Record<string, number>;
  reviews: UserReview[];
}

const STORAGE_KEY = "cinevault_user_data";

const defaultData: UserData = {
  favoritos: [],
  watchlist: [],
  avaliacoes: {},
  reviews: [],
};

const loadData = (): UserData => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...defaultData, ...JSON.parse(raw) } : defaultData;
  } catch {
    return defaultData;
  }
};

const saveData = (data: UserData) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export function useUserData() {
  const [data, setData] = useState<UserData>(loadData);

  useEffect(() => {
    saveData(data);
  }, [data]);

  const toggleFavorito = useCallback((id: string) => {
    setData(prev => ({
      ...prev,
      favoritos: prev.favoritos.includes(id)
        ? prev.favoritos.filter(f => f !== id)
        : [...prev.favoritos, id],
    }));
  }, []);

  const toggleWatchlist = useCallback((id: string) => {
    setData(prev => ({
      ...prev,
      watchlist: prev.watchlist.includes(id)
        ? prev.watchlist.filter(f => f !== id)
        : [...prev.watchlist, id],
    }));
  }, []);

  const avaliar = useCallback((id: string, nota: number) => {
    setData(prev => ({
      ...prev,
      avaliacoes: { ...prev.avaliacoes, [id]: nota },
    }));
  }, []);

  const addReview = useCallback((review: UserReview) => {
    setData(prev => ({
      ...prev,
      reviews: [review, ...prev.reviews.filter(r => r.movieId !== review.movieId)],
    }));
  }, []);

  const isFavorito = useCallback((id: string) => data.favoritos.includes(id), [data.favoritos]);
  const isWatchlist = useCallback((id: string) => data.watchlist.includes(id), [data.watchlist]);
  const getAvaliacao = useCallback((id: string) => data.avaliacoes[id] || 0, [data.avaliacoes]);
  const getReview = useCallback((id: string) => data.reviews.find(r => r.movieId === id), [data.reviews]);

  return {
    ...data,
    toggleFavorito,
    toggleWatchlist,
    avaliar,
    addReview,
    isFavorito,
    isWatchlist,
    getAvaliacao,
    getReview,
  };
}
