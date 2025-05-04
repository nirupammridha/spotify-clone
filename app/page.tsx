import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Music } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-neutral-800 bg-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between py-4">
          <div className="flex items-center">
            <Music className="h-8 w-8 text-green-500 mr-2" />
            <span className="text-xl font-bold">Spotify Clone</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/signup" className="text-neutral-300 hover:text-white">
              Sign up
            </Link>
            <Link href="/dashboard">
              <Button className="bg-green-500 hover:bg-green-400 text-black font-bold">
                Log in
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-green-900 to-black py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Music for everyone.</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Millions of songs. No credit card needed.
            </p>
            <Link href="/dashboard">
              <Button size="lg" className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-6 text-lg rounded-full">
                Get Started
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why choose our platform?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-neutral-900 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Discover Music</h3>
                <p className="text-neutral-300">
                  Find new artists and songs you'll love based on your preferences.
                </p>
              </div>
              
              <div className="bg-neutral-900 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Create Playlists</h3>
                <p className="text-neutral-300">
                  Build your own collections and share them with friends.
                </p>
              </div>
              
              <div className="bg-neutral-900 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Listen Anywhere</h3>
                <p className="text-neutral-300">
                  Enjoy your music on all your devices with seamless integration.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-900 py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <Music className="h-8 w-8 text-green-500 mr-2" />
              <span className="text-xl font-bold">Spotify Clone</span>
            </div>
            <p className="mt-2 text-sm text-neutral-400">
              © 2025 Spotify Clone. All rights reserved.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Jobs</a></li>
                <li><a href="#" className="hover:text-white">For the Record</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Communities</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white">For Artists</a></li>
                <li><a href="#" className="hover:text-white">Developers</a></li>
                <li><a href="#" className="hover:text-white">Advertising</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Useful Links</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white">Support</a></li>
                <li><a href="#" className="hover:text-white">Free App</a></li>
                <li><a href="#" className="hover:text-white">Premium Plans</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}