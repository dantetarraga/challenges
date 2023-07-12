import pandas as pd

def get_email_unic(file, col):
    df = pd.read_excel(file)
    emails = df[col].unique()    
    return emails

file = 'emails.xlsx'
column = 'email'

emails = get_email_unic(file, column)

print(emails)

