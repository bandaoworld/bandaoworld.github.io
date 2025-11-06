import pandas as pd
import json

class TFB(object):
        
    def readJson(self, filename):
        with open(filename, 'r', encoding="utf8") as fp:
            json_data = json.loads(fp.read())
            
            # ['name', 'link', 'pwd', 'year','type']
            JsonData = [[], [], [], [], []]
            headerList =list(json_data[0].keys())
            
            for item in json_data:
                JsonData[0].append(item[headerList[0]])
                JsonData[1].append(item[headerList[1]])
                JsonData[2].append(item[headerList[2]])
                JsonData[3].append(item[headerList[3]])
                JsonData[4].append(item[headerList[4]])
                
            # print(JsonData)
            return JsonData, headerList
            
    def writeCSV(self, JsonData, headerList, filename):
        DF = pd.DataFrame(
            {
                headerList[0]:JsonData[0],
                headerList[1]:JsonData[1],
                headerList[2]:JsonData[2],
                headerList[3]:JsonData[3],
                headerList[4] + "_0腾飞杯1新生杯":JsonData[4],
            }
        )
        DF.to_csv(filename, index = 0)
        print(f'{filename}__ok!')
    
    def run(self):
        JsonName,CsvName="./tf_basketball.json",'./TFB.csv'
        # JsonName,CsvName="./xs_basketball.json",'./XSB.csv'
        
        JsonData, headerList =  self.readJson(JsonName)
        self.writeCSV(JsonData, headerList, CsvName)
        
if __name__=="__main__":
    basketball = TFB()
    basketball.run()