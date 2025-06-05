import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Star, Users } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white p-6">
      <header className="text-center py-10">
        <h1 className="text-5xl font-extrabold text-amber-800 drop-shadow-sm">Epilogue</h1>
        <p className="text-xl text-amber-600 mt-2">Where book lovers connect, compete, and celebrate stories.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Button className="bg-amber-600 hover:bg-amber-700 text-white">Get Started</Button>
          <Button variant="outline" className="border-amber-600 text-amber-600">Learn More</Button>
        </div>
      </header>

      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
        <Card className="shadow-xl">
          <CardContent className="p-6 text-center">
            <BookOpen className="h-10 w-10 text-amber-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-amber-700">Take Quizzes</h2>
            <p className="text-gray-600 mt-2">Test your knowledge on your favorite books and earn points as you go.</p>
          </CardContent>
        </Card>
        <Card className="shadow-xl">
          <CardContent className="p-6 text-center">
            <Star className="h-10 w-10 text-amber-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-amber-700">Earn Badges</h2>
            <p className="text-gray-600 mt-2">Unlock achievements for activity, accuracy, and dedication.</p>
          </CardContent>
        </Card>
        <Card className="shadow-xl">
          <CardContent className="p-6 text-center">
            <Users className="h-10 w-10 text-amber-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-amber-700">Join the Community</h2>
            <p className="text-gray-600 mt-2">Post, comment, and connect with fellow readers around the world.</p>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-20">
        &copy; {new Date().getFullYear()} Epilogue. All rights reserved.
      </footer>
    </div>
  );
}
