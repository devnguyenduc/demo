class DateTime:
    def __init__(self,year,mon,day,hour,mins):
        self.year = year
        self.mon = mon
        self.day = day
        self.hour = hour
        self.min = mins
        self.date = {
            "year": self.year,
            "mon": self.mon,
            "day": self.day,
            "hour": self.hour,
            "min":self.min
        }
        self.digital = 0

    def set_date(self,year,mon,day,hour,min):
        self.year = year
        self.mon = mon
        self.day = day
        self.hour = hour
        self.min = mins
        self.date = {
            "year": self.year,
            "mon": self.mon,
            "day": self.day,
            "hour": self.hour,
            "min":self.min
        }
        self.digital = 0

    # trả về date time theo kiểu dictionary
    def get_date(self):
        return self.date

    def digitized(self):
        self.digital = self.min*self.hour*self.day*self.mon *(self.year-2000)
        
    def digital_time(self):
        if self.digital == 0:
            self.digitized()
            return self.digital
        else:
            return self.digital