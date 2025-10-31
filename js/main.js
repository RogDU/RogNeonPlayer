// Sistema de Música
class MusicPlayer {
    constructor() {
        this.playlists = {
            avantasia: {
                name: "Avantasia - The Scarecrow",
                image: "imagens/Front.jpg",
                tracks: [
                    {
                        name: "Twisted Mind",
                        artist: "Avantasia",
                        image: "imagens/Front.jpg",
                        path: "musicas/avantasia/01.Twisted Mind.mp3",
                        duration: "4:15"
                    },
                    {
                        name: "The Scarecrow", 
                        artist: "Avantasia",
                        image: "imagens/Front.jpg",
                        path: "musicas/avantasia/02.The Scarecrow.mp3",
                        duration: "11:12"
                    },
                    {
                        name: "Shelter From The Rain",
                        artist: "Avantasia",
                        image: "imagens/Front.jpg",
                        path: "musicas/avantasia/03.Shelter From The Rain.mp3",
                        duration: "5:08"
                    },
                     {
                        name: "Carry Me Over",
                        artist: "Avantasia",
                        image: "imagens/Front.jpg",
                        path: "musicas/avantasia/04. Carry Me Over.mp3",
                        duration: "4:09"
                    },
                    {
                        name: "What Kind Of Love",
                        artist: "Avantasia",
                        image: "imagens/Front.jpg",
                        path: "musicas/avantasia/05. What Kind Of Love.mp3",
                        duration: "4:54"
                    },
                    {
                        name: "Another Angel Down",
                        artist: "Avantasia",
                        image: "imagens/Front.jpg",
                        path: "musicas/avantasia/06. Another Angel Down.mp3",
                        duration: "5:42"
                    },
                     {
                        name: "The Toy Master",
                        artist: "Avantasia",
                        image: "imagens/Front.jpg",
                        path: "musicas/avantasia/07. The Toy Master.mp3",
                        duration: "4:15"
                    },
                    {
                        name: "Devil In The Belfry", 
                        artist: "Avantasia",
                        image: "imagens/Front.jpg",
                        path: "musicas/avantasia/08. Devil In The Belfry.mp3",
                        duration: "4:41"
                    },
                    {
                        name: "Cry Just A Little",
                        artist: "Avantasia",
                        image: "imagens/Front.jpg",
                        path: "musicas/avantasia/09. Cry Just A Little.mp3",
                        duration: "5:45"
                    },
                     {
                        name: "I Don't Belive In Your Love",
                        artist: "Avantasia",
                        image: "imagens/Front.jpg",
                        path: "musicas/avantasia/10. I Don't Belive In Your Love.mp3",
                        duration: "5:32"
                    },
                    {
                        name: "Lost In Space", 
                        artist: "Avantasia",
                        image: "imagens/Front.jpg",
                        path: "musicas/avantasia/11. Lost In Space.mp3",
                        duration: "4:12"
                    }                    
                ]
            },

            deathstars: {
                name: "Deathstars - Termination Bliss",
                image: "imagens/Cover.jpg",
                tracks: [
                    {
                        name: "Tongues",
                        artist: "Deathstars",
                        image: "imagens/Cover.jpg",
                        path: "musicas/Deathstars/01. Tongues.mp3",
                        duration: "3:45"
                    },
                    {
                        name: "Blitzkrieg",
                        artist: "Deathstars",
                        image: "imagens/Cover.jpg",
                        path: "musicas/Deathstars/02. Blitzkrieg Boom.mp3",
                        duration: "4:12"
                    },
                    {
                        name: "Motherzone",
                        artist: "Deathstars",
                        image: "imagens/Cover.jpg",
                        path: "musicas/Deathstars/03. Motherzone.mp3",
                        duration: "4:15"
                    }
                ]
            },

            
        };

        this.state = {
            currentPlaylist: 'avantasia',
            currentTrackIndex: 0,
            isPlaying: false,
            isShuffled: false,
            isRepeating: false,
            volume: 80,
            favorites: JSON.parse(localStorage.getItem('favorites')) || [],
            history: JSON.parse(localStorage.getItem('history')) || [],
            searchResults: []
        };

        this.audio = new Audio();
        this.init();
    }

    init() {
        this.setupAudio();
        this.loadPlaylist('avantasia');
        this.setupEventListeners();
        this.updateUI();
        this.createParticles();
        this.showNotification('RogNeonPlayer Carregado!', 'success');
    }

    setupAudio() {
        this.audio.addEventListener('loadedmetadata', () => {
            this.updateProgressBar();
            this.updateDuration();
        });

        this.audio.addEventListener('timeupdate', () => {
            this.updateProgressBar();
            this.updateCurrentTime();
        });

        this.audio.addEventListener('ended', () => {
            this.nextTrack();
        });

        this.audio.addEventListener('error', (e) => {
            console.error('Erro de áudio:', e);
            this.showNotification('Erro ao carregar música', 'error');
        });

        this.audio.volume = this.state.volume / 100;
    }

    createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        const bgAnimation = document.querySelector('.bg-animation');
        if (bgAnimation) {
            bgAnimation.appendChild(particlesContainer);
        }

        const colors = ['#ff2e63', '#08d9d6', '#ff9a00', '#ffffff'];
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const left = Math.random() * 100;
            const delay = Math.random() * 6;
            const duration = 6 + Math.random() * 4;
            const size = 1 + Math.random() * 2;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            particle.style.left = `${left}%`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.background = color;
            
            particlesContainer.appendChild(particle);
        }
    }

    setupEventListeners() {
        // Navegação
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const section = item.dataset.section;
                this.showSection(section);
            });
        });

        // Controles
        document.getElementById('playBtn').addEventListener('click', () => this.togglePlay());
        document.getElementById('prevBtn').addEventListener('click', () => this.previousTrack());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextTrack());
        document.getElementById('shuffleBtn').addEventListener('click', () => this.toggleShuffle());
        document.getElementById('repeatBtn').addEventListener('click', () => this.toggleRepeat());
        document.getElementById('favoriteBtn').addEventListener('click', () => this.toggleFavorite());

        // Barras
        document.getElementById('progressBar').addEventListener('input', (e) => {
            this.seekTo(e.target.value);
        });

        document.getElementById('volumeBar').addEventListener('input', (e) => {
            this.setVolume(e.target.value);
        });

        // Ações
        const clearFavoritesBtn = document.getElementById('clearFavorites');
        const clearHistoryBtn = document.getElementById('clearHistory');
        
        if (clearFavoritesBtn) {
            clearFavoritesBtn.addEventListener('click', () => this.clearFavorites());
        }
        if (clearHistoryBtn) {
            clearHistoryBtn.addEventListener('click', () => this.clearHistory());
        }

        // BUSCA CORRIGIDA
        const globalSearch = document.getElementById('globalSearch');
        if (globalSearch) {
            let searchTimeout;
            globalSearch.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    this.searchTracks(e.target.value);
                }, 300);
            });

            globalSearch.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.searchTracks(e.target.value);
                }
            });
        }

        // Busca em playlists
        const playlistSearch = document.getElementById('playlistSearch');
        if (playlistSearch) {
            playlistSearch.addEventListener('input', (e) => {
                this.searchPlaylists(e.target.value);
            });
        }
    }

    loadPlaylist(playlistKey) {
        if (!this.playlists[playlistKey]) return;

        this.state.currentPlaylist = playlistKey;
        this.state.currentTrackIndex = 0;
        
        const playlist = this.playlists[playlistKey];
        this.updateCurrentPlaylistInfo(playlist);
        this.loadTrack(0);
        this.renderPlaylists();
    }

    loadTrack(trackIndex) {
        const playlist = this.playlists[this.state.currentPlaylist];
        if (!playlist || trackIndex < 0 || trackIndex >= playlist.tracks.length) return;

        this.state.currentTrackIndex = trackIndex;
        const track = playlist.tracks[trackIndex];

        this.updateTrackInfo(track);
        this.updateFavoriteButton();

        this.audio.src = track.path;
        if (this.state.isPlaying) {
            this.audio.play().catch(console.error);
        }

        this.addToHistory(track);
    }

    updateTrackInfo(track) {
        document.getElementById('trackName').textContent = track.name;
        document.getElementById('trackArtist').textContent = track.artist;
        
        const albumArt = document.getElementById('albumArt');
        
        albumArt.classList.add('loading');
        albumArt.style.backgroundImage = 'none';
        
        const img = new Image();
        img.src = track.image;
        img.onload = () => {
            albumArt.style.backgroundImage = `url('${track.image}')`;
            albumArt.classList.remove('loading');
        };
        img.onerror = () => {
            albumArt.style.backgroundImage = 'linear-gradient(135deg, var(--primary), var(--secondary))';
            albumArt.classList.remove('loading');
            const artOverlay = albumArt.querySelector('.art-overlay');
            if (!artOverlay) {
                albumArt.innerHTML = '<div class="art-overlay"><i class="fas fa-music"></i></div>';
            }
        };
        
        document.getElementById('currentPlaylistDisplay').textContent = this.playlists[this.state.currentPlaylist].name;
        document.getElementById('trackPosition').textContent = `${this.state.currentTrackIndex + 1}/${this.getCurrentTracks().length}`;
    }

    updateCurrentPlaylistInfo(playlist) {
        document.getElementById('currentPlaylistName').textContent = playlist.name;
        document.getElementById('currentPlaylistCount').textContent = `${playlist.tracks.length} músicas`;
        
        const img = document.getElementById('currentPlaylistImg');
        if (img) {
            const newImg = new Image();
            newImg.src = playlist.image;
            newImg.onload = () => {
                img.src = playlist.image;
            };
            newImg.onerror = () => {
                img.style.display = 'none';
            };
        }
    }

    // SISTEMA DE BUSCA COMPLETO
    searchTracks(query) {
        const resultsContainer = document.getElementById('searchResults');
        if (!resultsContainer) return;

        this.state.searchResults = [];

        if (!query || query.trim() === '') {
            resultsContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-search"></i>
                    <p>Digite o nome da música ou artista...</p>
                    <small>Exemplo: "Twisted", "Avantasia", "Tongues"</small>
                </div>
            `;
            return;
        }

        const searchTerm = query.toLowerCase().trim();
        const allTracks = [];

        Object.keys(this.playlists).forEach(playlistKey => {
            const playlist = this.playlists[playlistKey];
            playlist.tracks.forEach((track, trackIndex) => {
                allTracks.push({
                    ...track,
                    playlistKey: playlistKey,
                    playlistName: playlist.name,
                    trackIndex: trackIndex
                });
            });
        });

        const filteredResults = allTracks.filter(track => {
            const trackName = track.name.toLowerCase();
            const artistName = track.artist.toLowerCase();
            
            return trackName.includes(searchTerm) || 
                   artistName.includes(searchTerm);
        });

        this.state.searchResults = filteredResults;
        this.renderSearchResults(filteredResults, searchTerm);
    }

    renderSearchResults(results, searchTerm) {
        const resultsContainer = document.getElementById('searchResults');
        if (!resultsContainer) return;

        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-search"></i>
                    <p>Nenhuma música encontrada para "${searchTerm}"</p>
                    <small>Tente outros termos como nome da música ou artista</small>
                </div>
            `;
            return;
        }

        resultsContainer.innerHTML = `
            <div class="search-header">
                <h4>${results.length} resultado(s) encontrado(s)</h4>
            </div>
            <div class="tracks-list">
                ${results.map((track, index) => `
                    <div class="track-item search-result-item" 
                         onclick="musicPlayer.playSearchResult('${track.playlistKey}', ${track.trackIndex})">
                        <img src="${track.image}" alt="${track.name}" 
                             onerror="this.src='https://via.placeholder.com/50x50/1a1a2e/00ff7f?text=🎵'">
                        <div class="track-info-small">
                            <h4>${this.highlightText(track.name, searchTerm)}</h4>
                            <p>${this.highlightText(track.artist, searchTerm)}</p>
                            <small>${track.playlistName} • ${track.duration}</small>
                        </div>
                        <div class="track-actions">
                            <button class="track-action-btn" 
                                    onclick="event.stopPropagation(); musicPlayer.playSearchResult('${track.playlistKey}', ${track.trackIndex})"
                                    title="Reproduzir">
                                <i class="fas fa-play"></i>
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    highlightText(text, searchTerm) {
        if (!searchTerm) return text;
        
        const regex = new RegExp(`(${this.escapeRegExp(searchTerm)})`, 'gi');
        return text.replace(regex, '<mark class="search-highlight">$1</mark>');
    }

    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    searchPlaylists(query) {
        const grid = document.getElementById('playlistsGrid');
        if (!grid) return;

        if (!query || query.trim() === '') {
            this.renderPlaylists();
            return;
        }

        const searchTerm = query.toLowerCase().trim();
        const filteredPlaylists = Object.keys(this.playlists)
            .filter(key => {
                const playlist = this.playlists[key];
                return playlist.name.toLowerCase().includes(searchTerm);
            })
            .map(key => this.playlists[key]);

        if (filteredPlaylists.length === 0) {
            grid.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-search"></i>
                    <p>Nenhuma playlist encontrada para "${query}"</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = filteredPlaylists.map(playlist => {
            const playlistKey = Object.keys(this.playlists).find(key => 
                this.playlists[key].name === playlist.name
            );
            
            return `
                <div class="playlist-card" onclick="musicPlayer.loadPlaylist('${playlistKey}')">
                    <img src="${playlist.image}" alt="${playlist.name}" 
                         onerror="this.src='https://via.placeholder.com/200x120/1a1a2e/00ff7f?text=🎵'">
                    <h3>${this.highlightText(playlist.name, searchTerm)}</h3>
                    <p>${playlist.tracks.length} músicas</p>
                </div>
            `;
        }).join('');
    }

    playSearchResult(playlistKey, trackIndex) {
        console.log('Tocando resultado:', playlistKey, trackIndex);
        
        this.loadPlaylist(playlistKey);
        setTimeout(() => {
            this.loadTrack(trackIndex);
            this.play();
            this.showNotification(`Tocando: ${this.playlists[playlistKey].tracks[trackIndex].name}`, 'success');
            
            this.showSection('player');
        }, 100);
    }

    togglePlay() {
        if (this.state.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    async play() {
        try {
            await this.audio.play();
            this.state.isPlaying = true;
            this.updatePlayButton();
            this.showVisualizer(true);
        } catch (error) {
            console.error('Erro ao reproduzir:', error);
        }
    }

    pause() {
        this.audio.pause();
        this.state.isPlaying = false;
        this.updatePlayButton();
        this.showVisualizer(false);
    }

    nextTrack() {
        let nextIndex;
        if (this.state.isShuffled) {
            nextIndex = Math.floor(Math.random() * this.getCurrentTracks().length);
        } else {
            nextIndex = (this.state.currentTrackIndex + 1) % this.getCurrentTracks().length;
        }
        this.loadTrack(nextIndex);
    }

    previousTrack() {
        let prevIndex;
        if (this.state.isShuffled) {
            prevIndex = Math.floor(Math.random() * this.getCurrentTracks().length);
        } else {
            prevIndex = (this.state.currentTrackIndex - 1 + this.getCurrentTracks().length) % this.getCurrentTracks().length;
        }
        this.loadTrack(prevIndex);
    }

    toggleShuffle() {
        this.state.isShuffled = !this.state.isShuffled;
        const shuffleBtn = document.getElementById('shuffleBtn');
        if (shuffleBtn) {
            shuffleBtn.classList.toggle('active', this.state.isShuffled);
        }
        this.showNotification(this.state.isShuffled ? 'Embaralhado' : 'Sequencial');
    }

    toggleRepeat() {
        this.state.isRepeating = !this.state.isRepeating;
        const repeatBtn = document.getElementById('repeatBtn');
        if (repeatBtn) {
            repeatBtn.classList.toggle('active', this.state.isRepeating);
        }
        this.audio.loop = this.state.isRepeating;
        this.showNotification(this.state.isRepeating ? 'Repetir ativado' : 'Repetir desativado');
    }

    toggleFavorite() {
        const track = this.getCurrentTrack();
        const trackKey = `${this.state.currentPlaylist}-${this.state.currentTrackIndex}`;
        
        const existingIndex = this.state.favorites.findIndex(fav => fav.key === trackKey);
        
        if (existingIndex > -1) {
            this.state.favorites.splice(existingIndex, 1);
            this.showNotification('Removido dos favoritos');
        } else {
            this.state.favorites.push({
                key: trackKey,
                playlist: this.state.currentPlaylist,
                trackIndex: this.state.currentTrackIndex,
                track: track,
                dateAdded: new Date().toISOString()
            });
            this.showNotification('Adicionado aos favoritos');
        }
        
        this.saveFavorites();
        this.updateFavoriteButton();
        this.renderFavorites();
    }

    seekTo(time) {
        this.audio.currentTime = time;
    }

    setVolume(volume) {
        this.state.volume = volume;
        this.audio.volume = volume / 100;
    }

    addToHistory(track) {
        this.state.history.unshift({
            playlist: this.state.currentPlaylist,
            trackIndex: this.state.currentTrackIndex,
            track: track,
            playedAt: new Date().toISOString()
        });

        if (this.state.history.length > 50) {
            this.state.history = this.state.history.slice(0, 50);
        }

        this.saveHistory();
        this.renderHistory();
    }

    // UI Methods
    updateUI() {
        this.updatePlayButton();
        this.updateFavoriteButton();
        this.renderPlaylists();
        this.renderFavorites();
        this.renderHistory();
        this.updateFavoritesCount();
    }

    updatePlayButton() {
        const icon = this.state.isPlaying ? 'fa-pause' : 'fa-play';
        const playBtn = document.getElementById('playBtn');
        if (playBtn) {
            playBtn.innerHTML = `<i class="fas ${icon}"></i>`;
        }
    }

    updateFavoriteButton() {
        const trackKey = `${this.state.currentPlaylist}-${this.state.currentTrackIndex}`;
        const isFavorited = this.state.favorites.some(fav => fav.key === trackKey);
        
        const btn = document.getElementById('favoriteBtn');
        if (btn) {
            btn.innerHTML = isFavorited ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
            btn.classList.toggle('active', isFavorited);
        }
    }

    updateProgressBar() {
        const progressBar = document.getElementById('progressBar');
        if (this.audio.duration && progressBar) {
            progressBar.value = this.audio.currentTime;
            progressBar.max = this.audio.duration;
            
            const progressFill = document.querySelector('.progress-fill');
            if (progressFill) {
                const percent = (this.audio.currentTime / this.audio.duration) * 100;
                progressFill.style.width = `${percent}%`;
            }
        }
    }

    updateCurrentTime() {
        const currentTime = document.getElementById('currentTime');
        if (currentTime) {
            currentTime.textContent = this.formatTime(this.audio.currentTime);
        }
    }

    updateDuration() {
        const duration = document.getElementById('duration');
        if (duration) {
            duration.textContent = this.formatTime(this.audio.duration);
        }
    }

    showVisualizer(show) {
        const visualizer = document.getElementById('visualizer');
        if (visualizer) {
            visualizer.classList.toggle('playing', show);
        }
    }

    showSection(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });

        const section = document.getElementById(sectionId);
        const navItem = document.querySelector(`[data-section="${sectionId}"]`);
        
        if (section) section.classList.add('active');
        if (navItem) navItem.classList.add('active');

        if (sectionId === 'favorites') this.renderFavorites();
        if (sectionId === 'history') this.renderHistory();
        if (sectionId === 'playlists') this.renderPlaylists();
        if (sectionId === 'search') {
            const searchInput = document.getElementById('globalSearch');
            if (searchInput) {
                searchInput.value = '';
                this.searchTracks('');
            }
        }
    }

    // Render Methods
    renderPlaylists() {
        const grid = document.getElementById('playlistsGrid');
        if (!grid) return;

        grid.innerHTML = Object.keys(this.playlists).map(key => {
            const playlist = this.playlists[key];
            return `
                <div class="playlist-card" onclick="musicPlayer.loadPlaylist('${key}')">
                    <img src="${playlist.image}" alt="${playlist.name}" onerror="this.src='https://via.placeholder.com/200x120/1a1a2e/08d9d6?text=🎵'">
                    <h3>${playlist.name}</h3>
                    <p>${playlist.tracks.length} músicas</p>
                </div>
            `;
        }).join('');
    }

    renderFavorites() {
        const list = document.getElementById('favoritesList');
        if (!list) return;

        if (this.state.favorites.length === 0) {
            list.innerHTML = `
                <div class="empty-state">
                    <i class="far fa-heart"></i>
                    <p>Nenhuma música favoritada</p>
                </div>
            `;
            return;
        }

        list.innerHTML = this.state.favorites.map((fav, index) => `
            <div class="track-item" onclick="musicPlayer.playFavorite(${index})">
                <img src="${fav.track.image}" alt="${fav.track.name}">
                <div class="track-info-small">
                    <h4>${fav.track.name}</h4>
                    <p>${fav.track.artist}</p>
                </div>
                <div class="track-actions">
                    <button class="track-action-btn" onclick="event.stopPropagation(); musicPlayer.removeFavorite(${index})" title="Remover">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    renderHistory() {
        const list = document.getElementById('historyList');
        if (!list) return;

        if (this.state.history.length === 0) {
            list.innerHTML = `
                <div class="empty-state">
                    <i class="far fa-clock"></i>
                    <p>Nenhuma música no histórico</p>
                </div>
            `;
            return;
        }

        list.innerHTML = this.state.history.slice(0, 20).map((item, index) => `
            <div class="track-item" onclick="musicPlayer.playFromHistory(${index})">
                <img src="${item.track.image}" alt="${item.track.name}">
                <div class="track-info-small">
                    <h4>${item.track.name}</h4>
                    <p>${item.track.artist}</p>
                    <small>${new Date(item.playedAt).toLocaleDateString()}</small>
                </div>
            </div>
        `).join('');
    }

    // Action Methods
    playFavorite(index) {
        const favorite = this.state.favorites[index];
        this.loadPlaylist(favorite.playlist);
        setTimeout(() => {
            this.loadTrack(favorite.trackIndex);
            this.play();
        }, 100);
    }

    playFromHistory(index) {
        const historyItem = this.state.history[index];
        this.loadPlaylist(historyItem.playlist);
        setTimeout(() => {
            this.loadTrack(historyItem.trackIndex);
            this.play();
        }, 100);
    }

    removeFavorite(index) {
        this.state.favorites.splice(index, 1);
        this.saveFavorites();
        this.renderFavorites();
        this.updateFavoriteButton();
        this.updateFavoritesCount();
        this.showNotification('Removido dos favoritos');
    }

    clearFavorites() {
        this.state.favorites = [];
        this.saveFavorites();
        this.renderFavorites();
        this.updateFavoriteButton();
        this.updateFavoritesCount();
        this.showNotification('Favoritos limpos');
    }

    clearHistory() {
        this.state.history = [];
        this.saveHistory();
        this.renderHistory();
        this.showNotification('Histórico limpo');
    }

    // Utility Methods
    getCurrentTrack() {
        return this.getCurrentTracks()[this.state.currentTrackIndex];
    }

    getCurrentTracks() {
        return this.playlists[this.state.currentPlaylist]?.tracks || [];
    }

    formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    }

    updateFavoritesCount() {
        const badge = document.getElementById('favoritesCount');
        if (badge) {
            badge.textContent = this.state.favorites.length;
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.getElementById('notification');
        if (!notification) return;

        notification.textContent = message;
        notification.className = `notification ${type} show`;

        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // Persistência
    saveFavorites() {
        localStorage.setItem('favorites', JSON.stringify(this.state.favorites));
    }

    saveHistory() {
        localStorage.setItem('history', JSON.stringify(this.state.history));
    }
}

// Inicializar o player quando a página carregar
let musicPlayer;
document.addEventListener('DOMContentLoaded', () => {
    musicPlayer = new MusicPlayer();
});