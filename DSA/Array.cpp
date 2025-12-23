#include <iostream>
using namespace std;

int main() {
     int size = 5;
     int marks[size];
     for(int i=0; i<size; i++){
        cin >> marks[i];
     }
      for(int i=0; i<size; i++){
        cout << marks[i] << endl;
    }
    
    // int marks[5] = {12,23,45,43,89};

    // cout << sizeof(marks)/sizeof(int) << endl;

    // marks[0] = 100;
    // mrks[1] = 200;
    // cout << marks[0] << endl;
    // cout << marks[1] << endl;
    // cout << marks[2] << endl;
    // cout << marks[3] << endl;
    // cout << marks[4] << endl;
    return 0;
}
