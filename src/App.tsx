import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import MovieDetail from "./pages/MovieDetail";
import ExplorePage from "./pages/ExplorePage";
import PeoplePage from "./pages/PeoplePage";
import PersonDetail from "./pages/PersonDetail";
import RankingsPage from "./pages/RankingsPage";
import NewsPage from "./pages/NewsPage";
import NewsDetail from "./pages/NewsDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/filme/:id" element={<MovieDetail />} />
          <Route path="/serie/:id" element={<MovieDetail />} />
          <Route path="/explorar" element={<ExplorePage />} />
          <Route path="/pessoas" element={<PeoplePage />} />
          <Route path="/pessoa/:id" element={<PersonDetail />} />
          <Route path="/rankings" element={<RankingsPage />} />
          <Route path="/premiados" element={<RankingsPage />} />
          <Route path="/noticias" element={<NewsPage />} />
          <Route path="/noticia/:id" element={<NewsDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
