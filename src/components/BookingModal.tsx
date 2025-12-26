import { useState } from 'react';
import { X, Calendar, MapPin, Phone, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        toast({
            title: 'Booking Request Sent!',
            description: 'Our executive will contact you shortly to confirm your visit.',
        });

        setIsSubmitting(false);
        setFormData({ name: '', email: '', phone: '', location: '', message: '' });
        onClose();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px] bg-charcoal border-border text-foreground">
                <DialogHeader>
                    <DialogTitle className="font-display text-2xl font-semibold text-primary">
                        Book Your Consultation
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                        Fill out the form below and we'll help you find your dream home.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                    <div className="space-y-4">
                        {/* Name */}
                        <div className="relative">
                            <User className="absolute left-3 top-3 w-4 h-4 text-primary/50" />
                            <Input
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="pl-10 bg-background/50 border-border"
                            />
                        </div>

                        {/* Email & Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 w-4 h-4 text-primary/50" />
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="pl-10 bg-background/50 border-border"
                                />
                            </div>
                            <div className="relative">
                                <Phone className="absolute left-3 top-3 w-4 h-4 text-primary/50" />
                                <Input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="pl-10 bg-background/50 border-border"
                                />
                            </div>
                        </div>

                        {/* Location Selection */}
                        <div className="relative">
                            <MapPin className="absolute left-3 top-3 w-4 h-4 text-primary/50 z-10" />
                            <Select
                                value={formData.location}
                                onValueChange={(value) => setFormData({ ...formData, location: value })}
                                required
                            >
                                <SelectTrigger className="pl-10 bg-background/50 border-border">
                                    <SelectValue placeholder="Preferred Location" />
                                </SelectTrigger>
                                <SelectContent className="bg-charcoal border-border text-foreground">
                                    <SelectItem value="mumbai">Mumbai</SelectItem>
                                    <SelectItem value="bangalore">Bangalore</SelectItem>
                                    <SelectItem value="gurugram">Gurugram</SelectItem>
                                    <SelectItem value="chennai">Chennai</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Message */}
                        <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-primary/50" />
                            <Textarea
                                name="message"
                                placeholder="Your Message (Optional)"
                                value={formData.message}
                                onChange={handleChange}
                                rows={3}
                                className="pl-10 bg-background/50 border-border resize-none"
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        variant="gold"
                        className="w-full text-base py-6"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center gap-2">
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Processing...
                            </span>
                        ) : (
                            'Confirm Booking'
                        )}
                    </Button>

                    <p className="text-[10px] text-center text-muted-foreground uppercase tracking-wider">
                        By clicking confirm, you agree to our terms and privacy policy.
                    </p>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default BookingModal;
