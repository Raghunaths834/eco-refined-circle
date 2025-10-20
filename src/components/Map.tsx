import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isTokenSet, setIsTokenSet] = useState(false);

  // Coordinates for Talcher, Odisha, India (Plot No. 3936, Gurujang Village)
  const location: [number, number] = [85.2269, 20.9506];

  useEffect(() => {
    if (!mapContainer.current || !isTokenSet || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: location,
        zoom: 14,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Add marker for the location
      new mapboxgl.Marker({ color: '#FF6B35' })
        .setLngLat(location)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(
              '<h3 style="font-weight: bold; margin-bottom: 8px;">GS Lubricants</h3><p>Plot No. 3936, Gurujang Village<br/>Talcher Sadar, Anugul<br/>Odisha, India, 759100</p>'
            )
        )
        .addTo(map.current);

      // Cleanup
      return () => {
        map.current?.remove();
      };
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }, [isTokenSet, mapboxToken]);

  const handleSetToken = () => {
    if (mapboxToken.trim()) {
      setIsTokenSet(true);
    }
  };

  if (!isTokenSet) {
    return (
      <div className="bg-muted h-80 rounded-lg flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-4">
          <h3 className="text-lg font-semibold text-foreground text-center mb-4">
            Enter Mapbox Token to View Map
          </h3>
          <p className="text-sm text-muted-foreground text-center mb-4">
            Get your free Mapbox public token at{' '}
            <a 
              href="https://mapbox.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              mapbox.com
            </a>
          </p>
          <div className="space-y-2">
            <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
            <Input
              id="mapbox-token"
              type="text"
              placeholder="pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbG..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="bg-background"
            />
          </div>
          <Button 
            onClick={handleSetToken}
            className="w-full"
            disabled={!mapboxToken.trim()}
          >
            Load Map
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-80 rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;
